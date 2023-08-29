import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Table } from 'react-bootstrap'

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);

  const callAPI = useCallback(async () => {
    setLoading(true);
    const result = await axios(`https://sample.bmaster.kro.kr/contacts?pageno=${page}`);
    // console.log(result.data.contacts);
    setPosts(result.data.contacts);
    const result1 = await axios.get('https://sample.bmaster.kro.kr/contacts');
    // console.log(result1.data);
    // console.log(result1.data.totalcount);
    setLast(Math.ceil(result1.data.totalcount / 5));
    setLoading(false);
  }, [page]);

  useEffect(() => { callAPI(); }, [callAPI]);

  if (loading) return <h1 className="my-5 text-center">로딩 중 ......</h1>

  return (
    <div>
      <Row className="my-5">
        <Col className="col p-5">
          <h1 className='text-center mb-5'>연락처 목록</h1>
          <div className="text-end mb-3">
            <Link to='/contacts/write'>
              <Button className='px-5'>글쓰기</Button>
            </Link>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>no</td>
                <td>name</td>
                <td>phote</td>
                <td>tel</td>
                <td>address</td>
              </tr>
            </thead>
            <tbody>
              {posts.map(post =>
                <tr key={post.no}>
                  <td>{post.no}</td>
                  <td>
                    <Link to={`/contacts/${post.no}`}>{post.name}</Link>
                  </td>
                  <td><img src={post.photo} alt={post.name} width='100px' /> </td>
                  <td>{post.tel}</td>
                  <td>{post.address}</td>
                </tr>
              )}
            </tbody>
          </Table>
          <div className='text-center mt-5'>
            <Button
              disabled={page === 1 && true}
              onClick={() => setPage(page - 1)}
            >이전</Button>
            <span className='mx-3'>{page}/{last}</span>
            <Button
              disabled={page === last && true}
              onClick={() => setPage(page + 1)}
            >다음</Button>
          </div>
        </Col >
      </Row >
    </div >
  )
}

export default PostList