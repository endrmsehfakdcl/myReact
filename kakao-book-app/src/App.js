import './App.css';
import { Routes, Route } from 'react-router-dom'
import BookPage from './components/BookPage'

// APISample.jsx 참고
function App() {
  return (
    <Routes>
      <Route
        path='/:category?'
        element={<BookPage />}
      ></Route>
    </Routes>
  )
}

export default App;
