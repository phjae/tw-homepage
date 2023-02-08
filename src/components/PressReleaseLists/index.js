import React, { useCallback, useState, useEffect } from "react";
import useSWR from 'swr'
import fetcher from "../../utils/fetcher";
import './style.css'
import Card from "../Card";

const PressReleaseLists = () => {
  const url = 'https://api.testworks.co.kr'
  const { data: pressReleaseDatas } = useSWR('https://api.testworks.co.kr/press-releases?_sort=id:DESC&_limit=5', fetcher);

  return (
    <div className="press-releaselist">
      {pressReleaseDatas && (
        pressReleaseDatas.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            to={`/pressdetail/${data.id}`}
            src={url + data.thumbnail.url}
            title={data.title}
            preview={data.preview}
            date={data.updated_at}
          />
        ))
      )}
    </div>
  )
}
export default PressReleaseLists;
