import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from './Categories';
import BookList from './BookList';


const BookPage = () => {
  let { category } = useParams();
  console.log(category);
  if (!category) {
    category = 'Java';
  }

  return (
    <div>
      <Categories></Categories>
      <BookList category={category}></BookList>
    </div>
  )
}

export default BookPage