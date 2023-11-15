import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Coder Wikipedia | Home</title>
      <meta name='keywords' content='coders' />
    </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>lorem</p>
        <Link href="/coders/" className="btn">See All Coders</Link>

        <style>
          {`
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ffbf49;
              border-radius: 4px;
              color: black;
              text-align: center;
              transition: all 0.2s;
            }
            .btn:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </div>
    </>
  )
}
