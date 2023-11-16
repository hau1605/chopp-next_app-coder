'use client'

import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllPhotos () {
  const {data, error, isLoading} = useSWR (
    'https://jsonplaceholder.typicode.com/photos',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  console.log(data);
  if(error) return "An error has occurred";
  if(isLoading) return "Loading...";

  return (
    <>
        <div>
            <h1>All Photos</h1>
            {data?.map((photo, index) => (
              <Link key={index} href={`/photos/${photo.id}`}>
                {/* <Image src={photo.url} alt={photo.title} 
                    width={100} height={100}
                    style={{width:'10%', height:'10%', objectFit:'contain'}}
                    sizes='60vw' priority/> */}
                    <p style={{color:'white'}}>{data.title}</p>
              </Link>
            ))}
        </div>
    </>
  )
}
