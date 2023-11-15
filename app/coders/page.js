'use client'

import Head from 'next/head'
import Link from 'next/link';
import useSWR from 'swr';
import styles from '@/styles/Coder.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllCoders () {
  const {data, error, isLoading} = useSWR (
    'https://jsonplaceholder.typicode.com/users',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if(error) return "An error has occurred";
  if(isLoading) return "Loading...";

  return (
    <>
      <Head>
        <title>Coder Wikipedia | Coders</title>
        <meta name='keywords' content='coders' />
      </Head>
        <div>
            <h1>All Coders</h1>
            {data?.map((coder) => (
              <Link href={"/coders/" + coder.id} key={coder.id} className={styles.single}>
                <h3>{coder.name}</h3>
              </Link>
            ))}
        </div>
    </>
  )
}
