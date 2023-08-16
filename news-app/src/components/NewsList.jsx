import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import './NewsList.css'
import axios from 'axios'
import UsePromise from '../lib/UsePromise'

// const sampleArticle = {
//   title: "제목",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit quidem, itaque necessitatibus error, ad debitis eos minima fugiat quibusdam placeat dignissimos doloribus officiis perferendis. Rerum fugit aut adipisci quos!",
//   url: 'https://www.naver.com'
// }

const NewsList = ({ category }) => {
  const [loading, response, error] = UsePromise(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=kr';
    const query = category === 'all' ? '' : '&category=' + category;
    const apiKey = '&apikey=8044e094c0d445e497e559590917711b';
    return axios.get(url + query + apiKey);

  }, [category])

  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  // 라이프 사이클 관리가 필요하다 useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const url = 'https://newsapi.org/v2/top-headlines?country=kr';
  //       const query = category === 'all' ? '' : '&category=' + category;
  //       const apiKey = '&apikey=8044e094c0d445e497e559590917711b';
  //       const response = await axios.get(url + query + apiKey);
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [category]);


  if (loading) {
    return <div className='newsListBlock'>data loading ...</div>
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <div className='newsListBlock'>에러 발생!!!</div>
  }

  const { articles } = response.data;

  return (
    <div className='newsListBlock'>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  )
}

export default NewsList