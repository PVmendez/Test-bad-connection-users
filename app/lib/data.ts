export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetcher = (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url).then((res) => res.json()));
    }, 3000);
  });
};
