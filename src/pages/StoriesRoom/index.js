import React, { useState, useCallback, useEffect } from "react";
import useSWR from 'swr';
import fetcher from "../../utils/fetcher";
import Pagination from "react-js-pagination";
import './style.css'

const StoriesRoom = () => {
  const url = 'https://api.testworks.co.kr'
  const { data } = useSWR('https://api.testworks.co.kr/featured-stories?_sort=id:DESC', fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <>
      {data ? (
        <div className="featured-storylist">
          <div>
            {currentPosts.map((post) => (
              <div key={post.id} className="card-container">
                <div className='press-img'>
                  <img src={url + post.thumbnail.url} alt="img" />
                </div>
                <div className='press-info'>
                  <h2 className="press-title">{post.title}</h2>
                  <a href={post.body} >
                    <button>기사보러가기</button>
                  </a>
                  <div className="press-date">{new Date(post.updated_at)}</div>
                </div>
              </div>
            ))
            }
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={postsPerPage}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              hideNavigation={true}
              firstPageText={"<<"}
              lastPageText={">>"}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}

export default StoriesRoom;