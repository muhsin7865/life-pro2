import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ data, brands_data }) {
  return (
    <>
      <Head>
        <title>Life Pharmacy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
        <link rel="icon" href="/life-logo.jfif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Layout data={data} brands_data={brands_data}>
        <main className={styles.main}>
        </main>
      </Layout>

    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
  const data = await res.json();

  const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
  const brands_data = await brands_res.json();
  return {
    props: {
      data,
      brands_data
    }
  }
}