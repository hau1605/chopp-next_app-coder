'use client'

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

// export const generateStaticParams = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const coders = await response.json();

//         const paths = coders.map((coder) => {
//             return {
//                 params: { id: coder.id.toString() }
//             };
//         });
//         console.log("paths: ", paths);
//         return {
//             paths,
//             fallback: true
//         };
//     } catch (error) {
//         console.error("Lỗi khi fetch dữ liệu: ", error);
//         return { paths: [], fallback: false };
//     }
// }

// async function getPost (params) {
//     console.log("params: ", params);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data = await res.json()
//     console.log("data: ", data);
//     return data;
// }
export default function Detail({ params }) {
    const {data, error, isLoading} = useSWR (
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false, // revalidate nếu dữ liệu cũ
            revalidateOnFocus: false, // revalidate nếu focus tab
            revalidateOnReconnect: false // revalidate nếu reconnect
        }
    );
    if(error) return "An error has occurred";
    if(isLoading) return "Loading...";
    // const data = await getPost(params);
    return (
        <>
            <p>Name: {data?.name}</p>
            <p>Email: {data?.email}</p>
        </>
    )
}