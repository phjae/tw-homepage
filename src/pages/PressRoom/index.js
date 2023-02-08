import React, { useState, useCallback, useEffect } from "react";
import useSWR from 'swr';
import fetcher from "../../utils/fetcher";
import Card from "../../components/Card";
import Pagination from "react-js-pagination";

const PressRoom = () => {
  const url = 'https://api.testworks.co.kr'
  const { data } = useSWR('https://api.testworks.co.kr/press-releases?_sort=id:DESC', fetcher);
  // const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // const fetchPressData = useCallback(() => {
  //   axios
  //     .get('https://api.testworks.co.kr/press-releases?_sort=id:DESC')
  //     .then((response) => {
  //       setDatas(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, []);

  // useEffect(() => {
  //   fetchPressData()
  // }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {data ? (
        <div className="press-releaselist">
          {data && (
            currentPosts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                to={`/pressdetail/${post.id}`}
                src={url + post.thumbnail.url}
                title={post.title}
                preview={post.preview}
                date={post.updated_at}
              />
            ))
          )}
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
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  )
}

export default PressRoom;