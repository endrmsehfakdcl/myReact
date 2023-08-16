import { useState } from 'react';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = 'https://dapi.kakao.com/v3/search/book';
const REST_API_KEY = '98fb1054fadbc801e5b9337e8492549d';

function App() {
  // const API = axios(`${BASE_URL}?target=title&query=자바`, {
  //   method: "GET",
  //   headers: {
  //     "Authorization": `KakaoAK ${REST_API_KEY}`
  //   }
  // })
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error("Error:", error));
  const AxiosGet = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios(`${BASE_URL}?target=title`, {
        params: {
          query: '자바'
        },
        method: "GET",
        headers: {
          "Authorization": `KakaoAK ${REST_API_KEY}`
        }
      })
        .then(response => setData(response.data.documents))
        .catch(error => console.error("Error:", error))
    }, [data]);
    return (
      <div>
        {data.map((v, i) => {
          return (
            <div key={i}>
              <h2>{v.title}</h2>
              <img src="{v.thumbnail}" alt="" />
              <div>{v.contents}</div>
              <div>{v.price}원 저자 {v.authors.map(v => v)}</div>
              <div>링크 <a href={v.url}>클릭</a></div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div >
      <AxiosGet></AxiosGet>
    </div>
  );
}

export default App;
