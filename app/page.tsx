'use client';

import useSWR from 'swr';
import { fetcher, url } from './lib/data';
import { useState } from 'react';
import { Post } from './lib/interfaces';
import Search from './ui/dashboard/search';
import Snackbar from './ui/dashboard/snackbar';
import Spinner from './ui/loader/spinner';
import Card from './ui/dashboard/card';
import Navbar from './ui/navbar/navbar';
import Footer from './ui/footer/foooter';

export default function Page() {
  const [slowNotify, setSlowNotify] = useState(false);
  const [showData, setShowData] = useState<Post[]>([]);

  const { data: postData } = useSWR(url, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) =>
      setTimeout(() => revalidate({ retryCount }), 5000),
    revalidateOnReconnect: true,
    onLoadingSlow: () => {
      setSlowNotify(true);
    },
  });

  const handleSetDataToShow = (dataToShow: Post[]) => {
    setShowData(dataToShow);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col p-6">
        <div className="container mx-auto px-4 pt-4">
          <Search placeholder="userId" setDataToShow={handleSetDataToShow} />
          {postData ? <Card data={showData ?? postData} /> : <Spinner />}
          {slowNotify && <Snackbar error={true} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
