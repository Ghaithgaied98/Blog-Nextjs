import { Fragment } from 'react'
import '../styles/globals.css'
import Layout from '../components/layout/layout'


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>

      <Component {...pageProps} />   
      </Layout>
    </Fragment>
    ) 
    
}

export default MyApp
