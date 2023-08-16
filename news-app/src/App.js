import { useCallback, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './components/NewsPage';


// APISample.jsx 참고
function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  // return (
  //   <div className="App">
  //     <div>
  //       <Categories category={category} onSelect={onSelect}></Categories>
  //       <NewsList category={category}></NewsList>
  //     </div>
  //   </div>
  // );

  return (
    <Routes>
      <Route
        path='/:category?'
        element={<NewsPage />}
      ></Route>
    </Routes>
  )
}

export default App;
