import BookItem from './BookItem'
import './BookList.css'
import axios from 'axios'
import UsePromise from '../lib/UsePromise'

const BASE_URL = 'https://dapi.kakao.com/v3/search/book';
const REST_API_KEY = '9360a628703fcb5124e5b4de4974792b'; //98fb1054fadbc801e5b9337e8492549d
const BookList = ({ category }) => {
  const [loading, response, error] = UsePromise(() => {
    const url = `${BASE_URL}?target=title`;
    const query = category === 'Java' ? '&query=Java' : ' &query=' + category;
    const config = {headers: `Authorization: KakaoAK ${REST_API_KEY}`};
    // const config = {
    //   headers: {
    //     Authorization: `KakaoAK ${REST_API_KEY}`
    //   }
    // };
    console.log(url + query);
    return axios.get(url + query, config);

  }, [category])

  if (loading) {
    return <div className='newsListBlock'>data loading ...</div>
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <div className='newsListBlock'>에러 발생!!!</div>
  }

  const { documents } = response.data;
  console.log(response);
  return (
    <div className='newsListBlock'>
      {documents.map(article => (
        <BookItem key={article.url} article={article} />
      ))}
    </div>
  )
}

export default BookList