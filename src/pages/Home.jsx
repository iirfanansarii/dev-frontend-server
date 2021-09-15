import React, { useEffect, useState } from 'react';
import PostcardComponent from '../components/PostcardComponent';
import PaginationComponent from '../components/PaginationComponent';
import Layout from '../layout/Layout';
import { createContext } from 'react';
import httpService from '../httpService/httpService';
const postContext = createContext();

export default function Home() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);

  useEffect(() => {
    httpService
      .get('/post', { params: { page: `${page}`, size: `${size}` } })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  const backPageHandler = () => {
    setPage(page - 1);
  };

  return (
    <>
      <postContext.Provider value={{ posts, page }}>
        <Layout>
          <PostcardComponent />
          <PaginationComponent
            nextPageHandler={nextPageHandler}
            backPageHandler={backPageHandler}
          />
        </Layout>
      </postContext.Provider>
    </>
  );
}

export { postContext };
