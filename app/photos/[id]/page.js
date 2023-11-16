'use client'

import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PhotoDetail({ params }) {
    const {data, error, isLoading} = useSWR (
        `https://jsonplaceholder.typicode.com/photos/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false, // revalidate nếu dữ liệu cũ
            revalidateOnFocus: false, // revalidate nếu focus tab
            revalidateOnReconnect: false // revalidate nếu reconnect
        }
    );
    if(error) return "An error has occurred";
    if(isLoading) return "Loading...";
    return (
        <>
            <div className='photo_container'>
                <Image src={data.url} alt={data.title} width={100} height={100} 
                    sizes='60vw' priority/>
            </div>
        </>
    )
}