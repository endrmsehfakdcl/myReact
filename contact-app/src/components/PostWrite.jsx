import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    name: '',
    tel: '',
    address: '',
    photo: '',
  });

  const { name, tel, address, photo } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onInsert = async () => {
    if (!name) {
      alert('이름을 입력 하세요');
    } else if (!tel) {
      alert('연락처 입력 하세요');
    } else if (!address) {
      alert('주소 입력 하세요');
    } else {
      await axios.post('https://sample.bmaster.kro.kr/contacts', form);
      alert('새로운 연락처 등록 완료');
    }
    navigator('/contacts');
  };


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
              <Button className="me-2 px-5" type="button" onClick={() => onInsert()}>
                {' '}
                {/** */}
                등록
              </Button>
              <Button variant="secodary px-5">취소</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PostWrite;