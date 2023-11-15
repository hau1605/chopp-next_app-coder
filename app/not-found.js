'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1); // Cập nhật số giây mỗi giây
    }, 1000);

    setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearInterval(interval);
  }, [])
  return (
    <div className='not-found'>
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Going back to the <Link href="/">Homepage</Link> is {seconds} seconds</p>
    </div>
  )
}
