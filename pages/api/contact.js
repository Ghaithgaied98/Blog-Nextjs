import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    // store data in a database
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://ghaith2:frJ5WKwRgjiuidNk@cluster0.zviibt3.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = client.db();
    try {
        const result = await db.collection("messages").insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        client.close();
      res.status(500).json({ message: error.message });

      return;
    }
    client.close()
    res
      .status(201)
      .json({ mesage: "succesfuly stored a messsage", message: newMessage });
  }
}
