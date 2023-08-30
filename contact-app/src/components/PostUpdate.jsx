import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostUpdate = () => {
  const [loading, setLoading] = useState();
  const navigator = useNavigate();
  const { no } = useParams();
  console.log('update no: ', no);

  const [form, setForm] = useState({
    no: no,
    name: '',
    tel: '',
    address: '',
    photo: '',
  });

  const { name, tel, address, photo } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onUpdate = async () => {
    if (window.confirm(`${name}의 연락처를 수정하시겠습니까?`)) {
      await axios.put(`https://sample.bmaster.kro.kr/contacts/${no}`, form);
      navigator(-1);
    }
  }
  const callAPI = useCallback(async () => {
    setLoading(true);
    const result = await axios.get(`https://sample.bmaster.kro.kr/contacts/${no}`);
    // console.log('result: ', result.data);
    setForm(result.data);
    setLoading(false);
  }, [no]);

  useEffect(() => { callAPI(); }, [callAPI]);

  if (loading) return <h1 className='my-5 text-center'>로딩중 .......</h1>


  return (
    <div>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">게시글 등록</h1>
          <Form>
            <Form.Control
              name="name"
              value={name}
              onChange={onChangeForm}
              className="my-3"
              placeholder="이름을 입력하세요"
            />
            <Form.Control
              name="tel"
              value={tel}
              onChange={onChangeForm}
              className="my-3"
              placeholder="연락처를 입력하세요"
            />
            <Form.Control
              name="address"
              value={address}
              onChange={onChangeForm}
              className="my-3"
              placeholder="주소를 입력하세요"
            />

            <div className="text-center mt-3">
              <Button
                className="me-2 px-5"
                type="button"
                onClick={onUpdate}
              >
                {' '}
                {/** */}
                수정</Button>
              <Button
                variant="secodary px-5"
                onClick={callAPI}
              >취소</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default PostUpdate