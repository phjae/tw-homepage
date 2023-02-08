import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PressDetail = () => {
  const { dt } = useParams();
  const [pressData, setPressData] = useState([]);

  const fetchPressDetailData = useCallback(() => {
    axios
      .get(`https://api.testworks.co.kr/press-releases/${dt}`)
      .then((response) => {
        setPressData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    fetchPressDetailData();
  }, [])

  return (
    <>
      <div>
        <div>보도기사</div>
        <div>{pressData.updated_at}</div>
      </div>
      <div>
        <div>{pressData.title}</div>
        <div>{pressData.preview}</div>
      </div>
      <div>
        <ReactMarkdown>{pressData.body}</ReactMarkdown>
      </div>
      <NavLink to='/pressroom'>
        <button>목록보기</button>
      </NavLink>
      <div>
        <h1>관련기사</h1>
        <div>
          <a href={pressData.articleurl1}>{pressData.articlename1}</a>
        </div>
        <div>
          <a href={pressData.articleurl2}>{pressData.articlename2}</a>
        </div>
        <a href={pressData.articleurl3}>{pressData.articlename3}</a>
      </div>

    </>
  )
}

export default PressDetail;