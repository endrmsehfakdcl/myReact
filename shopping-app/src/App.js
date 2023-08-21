import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import bg from './img/bg.jpg'
import shoes from './data'
import Product from './components/Product';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Detail from './components/Detail';
import Cart from './components/Cart';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Title2 from './components/Title2';
import Nike from './components/Nike';
import inike from './nike';
import axios from 'axios'
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState(shoes);
  const [nike, setNike] = useState(inike);
  const [count, setCount] = useState(2);
  return (
    <div className='App'>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">PLAYLIST</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
              <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={
            <div>
              <div className='slider'></div>
              <Title></Title>
              <Button
                variant='outline-primary'
                onClick={() => {
                  let data1 = [...data].sort((a, b) => a.title > b.title ? 1 : -1);
                  setData(data1);
                }}
              >이름순 정렬</Button>{' '}
              <Button
                variant='outline-secondary'
                onClick={() => {
                  let data1 = [...data].sort((a, b) => a.price > b.price ? 1 : -1);
                  setData(data1);
                }}
              >낮은 가격순 정렬</Button>{' '}
              <Button
                variant='outline-success'
                onClick={() => {
                  let data1 = [...data].sort((a, b) => a.price < b.price ? 1 : -1);
                  setData(data1);
                }}
              >높은 가격순 정렬</Button>{' '}

              <div className='container'>
                <div className='row'>
                  {data.map((a, i) => {
                    return (<Product data={data[i]} key={data[i].id} />)
                  })}
                </div>
              </div>

              <Title2></Title2>
              <Button
                variant='outline-success'
                count={count}
                onClick={(e) => {
                  if (count < 4) {
                    setCount(count + 1);
                    axios.get(`https://raw.githubusercontent.com/endrmsehfakdcl/react_data/main/nike${count}.json`)
                      .then((result) => {
                        const nike2 = [...nike, ...result.data];
                        setNike(nike2);
                      })
                  }
                  if (count === 3) {
                    e.target.style.display = 'none';
                  }

                }}
              > + 3개 상품 더 보기</Button>
              <div className='container mt-5'>
                <div className='row'>
                  {nike.map((ele, i) => {
                    return (
                      <Nike nike={nike[i]} key={nike[i].id} />
                    )
                  })}
                </div>
              </div>


            </div>
          }></Route>
          <Route path='/detail/:id?' element={<Detail data={data} />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/member' element={<Member />}></Route>
          <Route path='/location' element={<Location />}></Route>
        </Routes>
        {/* <div className='bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div> */}
        <Footer></Footer>
      </>

    </div>
  );
}

const Title = () => {
  const csst1 = {
    marginTop: "70px",
    textAlign: 'center'
  }

  return (
    <>
      <h3 style={csst1}>MD's Pick</h3>
      <p style={{ textAlign: 'center' }}>
        시선을 사로잡는 스타일링, 제품을 만나보세요.
      </p>
    </>
  )
}

function About() {
  return (
    <>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </>
  )
}

function Member() {
  return (
    <>
      <h4>Member</h4>
    </>
  )
}

function Location() {
  return (
    <>
      <h4>Location</h4>
    </>
  )
}
export default App;
