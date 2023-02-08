import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr'
import fetcher from "../../utils/fetcher";
import ReactMarkdown from "react-markdown";

const LatestNewsDetail = () => {
  const { dt } = useParams();
  const { data: newsData } = useSWR(`https://api.testworks.co.kr/latest-news/${dt}`, fetcher);

  if (!newsData) return null;

  return (
    <>
      <div>
        <div>보도기사</div>
        <div>{newsData.updated_at}</div>
      </div>
      <div>
        <div>{newsData.title}</div>
        <div>{newsData.preview}</div>
      </div>
      <div>
        <ReactMarkdown>{newsData.body}</ReactMarkdown>
      </div>
    </>
  )
}

export default LatestNewsDetail;