import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const MypageForm = () => {
  const divStyle = {
    margin: 50
  };
  const marginBottom = {
    marginBottom : 5
  };
  return (
    <>
      <div style={divStyle}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>E-MAIL</Form.Label>
        <Form.Control type="email" disabled value={$.cookie("login_email")}/>
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
        <Form.Label>새로운 비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password" />
        <Form.Label>새로운 비밀번호 확인</Form.Label>
        <Form.Control type="password" placeholder="Enter New Password Check" />
      </Form.Group>
      <Button variant="primary"  block style={marginBottom}>
      회원 정보 수정하기
      </Button>
      <Button variant="primary" block>
      회원 탈퇴하기
      </Button>
      </div>
    </>
  );
};

export default MypageForm;
