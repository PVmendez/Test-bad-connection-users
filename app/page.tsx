'use client';

import useSWR from 'swr';
import { Card } from './ui/dashboard/card';
import { API_URL, fetcher } from './lib/data';
import Search from './ui/dashboard/search';
import { useState } from 'react';
import { Post } from './lib/interfaces';
import Snackbar from './ui/dashboard/snackbar';

export default function Page() {
  const [slowNotify, setSlowNotify] = useState(false);

  const { data: postData } = useSWR(API_URL, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) =>
      setTimeout(() => revalidate({ retryCount }), 5000),
    revalidateOnReconnect: true,
    onLoadingSlow: (key, config) => {
      setSlowNotify(true);
    },
  });

  const [showData, setShowData] = useState(postData || null);

  const handleSetDataToShow = (dataToShow: Post[]) => {
    setShowData(dataToShow);
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-3xl font-semibold">Posts</h1>
        <Search placeholder="userId" setDataToShow={handleSetDataToShow} />
        {postData ? <Card data={showData ?? postData} /> : <p>Loading...</p>}
        {slowNotify && <Snackbar error={true} />}
      </div>
    </main>
  );
}
