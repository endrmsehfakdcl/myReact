import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories';
import NewsList from './NewsList';


const NewsPage = () => {
  let { category } = useParams();
  console.log(category);
  if (!category) {
    category = 'all';
  }

  return (
    <div>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </div>
  )
}

export default NewsPage