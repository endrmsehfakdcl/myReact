import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostRead = () => {
  const navigator = useNavigate();
  const { no } = useParams();
  const [post, setPost] = useState({
    no: '',
    name: '',
    tel: '',
    address: '',
    photo: '',
  });

  console.log('read no ', no);
  const { name, tel, address, photo } = post;

  const callAPI = useCallback(async () => {
    const result = await axios.get(`https://sample.bmaster.kro.kr/contacts/${no}`);
    setPost(result.data);
  }, [no]);

  const onDelete = async () => {
    if (window.confirm(`${name}님 연락처를 삭제하시겠습니까?`)) {
      await axios.delete(`https://sample.bmaster.kro.kr/contacts/${no}`);
      navigator('/contacts');
    }
  }
  /* 사진등록 */
  const onInsert = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);

    const url = `https://sample.bmaster.kro.kr/contacts/${no}/photo`;

    await axios.post(url, formData).then(() => {
      alert("파일이 업로드되었습니다.");
      navigator("/contacts");
    })
      .catch((error) => console.error("파일 업로드 중 오류 발생:", error));
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => { callAPI(); }, [callAPI]);
  return (
    <div>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">{name}님 연락처 정보</h1>
          <div className="text-end mb-2">
            <Link to={`/contacts/update/${no}`}>
              <Button variant='primary btn-sm'>수정</Button>
            </Link>
            <Button onClick={onDelete} variant='danger btn-sm'>삭제</Button>
          </div>
          <Card>
            <Card.Header>
              [{no}] {name}
            </Card.Header>
            <Card.Body>
              <Image src={photo} thumbnail />
            </Card.Body>
            <Card.Footer>
              {tel} {'    '} {address}
            </Card.Footer>
          </Card>
          <div>
            <input type="file" onChange={handleFileChange} />
            <Button className="me-2 px-5" type="button" onClick={() => onInsert()}>
              사진등록
            </Button>
          </div>

        </Col>
      </Row>
    </div>
  );
};

export default PostRead;