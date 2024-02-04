import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { API_URL, fetcher } from '../../lib/data';
import useSWR from 'swr';
import Snackbar from './snackbar';

export default function Search({
  placeholder,
  setDataToShow,
}: {
  placeholder: string;
  setDataToShow: Function;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [slowNotify, setSlowNotify] = useState(false);

  const { data: filteredData, error } = useSWR(
    searchTerm ? `${API_URL}?userId=${searchTerm}` : null,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) =>
        setTimeout(() => revalidate({ retryCount }), 5000),
      revalidateOnReconnect: true,
      onLoadingSlow: (key, config) => {
        setSlowNotify(true);
      },
    }
  );

  useEffect(() => {
    setDataToShow(filteredData);
  }, [filteredData, setDataToShow]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {slowNotify && <Snackbar error={true} />}
    </div>
  );
}
