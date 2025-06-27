import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import Input from "../common/Input";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Login() {
  const navigate = useNavigate();

  const socialMedia = [
    { id: 1, icon: <SlSocialFacebook /> },
    {
      id: 2,
      icon: <CiTwitter />,
    },
    {
      id: 3,
      icon: <FiLinkedin />,
    },
    {
      id: 4,
      icon: <AiOutlineYoutube />,
    },
  ];

  const encryptData = (data, secretKey) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      assigned: false,
    },
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      userName: Yup.string().required("User Name is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .test(
          "has-uppercase",
          "Password Must contain at least one uppercase letter",
          (value) => {
            return [...(value || "")].some(
              (char) => char >= "A" && char <= "Z"
            );
          }
        )
        .test(
          "has-number",
          "Password Must contain at least one number",
          (value) => {
            return [...(value || "")].some(
              (char) => char >= "0" && char <= "9"
            );
          }
        )
        .test(
          "has-symbol",
          "Password Must contain at least one special character",
          (value) => {
            const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
            return [...(value || "")].some((char) =>
              specialChars.includes(char)
            );
          }
        ),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      const secretKey = `12221`;
      localStorage.setItem("Credientials", encryptData(values, secretKey));
      navigate("/home");
    },
  });
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container className=" mx-auto">
        <Row className="">
          <Col md="4" className=" ">
            <Row className=" gap-4">
              <div className="">
                <h2>Sign In</h2>
                <p style={{ fontWeight: 700 }} className="d-flex gap-2">
                  <span> New User? </span>
                  <span
                    style={{ fontWeight: 600, color: "#587FFF" }}
                    className=""
                  >
                    Create an account
                  </span>
                </p>
              </div>
              <div>
                <Input
                  placeholder={"Enter User Name"}
                  value={formik.values.userName}
                  change={(e) => {
                    formik.setFieldValue("userName", e);
                    formik.setFieldError("userName", "");
                  }}
                  error={formik.errors.userName}
                />
                <Input
                  placeholder={"Enter Password"}
                  value={formik.values.password}
                  change={(e) => {
                    formik.setFieldValue("password", e);
                    formik.setFieldError("password", "");
                  }}
                  error={formik.errors.password}
                />
                <Form.Check // prettier-ignore
                  type={"checkbox"}
                  label={`Keep me assigned in`}
                  value={formik.values.assigned}
                  onChange={(e) => {
                    formik.setFieldValue("assigned", e.target.value);
                  }}
                />
                <Button
                  style={{ width: "100%" }}
                  className="mt-3"
                  variant="primary"
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                >
                  Sign In
                </Button>
              </div>
              <Row className="d-none d-md-flex justify-content-center align-items-center py-3">
                <Col md="">
                  <div
                    style={{
                      borderBottom: "2px solid ",
                      width: "100%",
                      borderColor: "#ccc",
                    }}
                  />
                </Col>
                <Col md="auto">
                  <p style={{ fontWeight: 700, margin: 0, fontSize: 13 }}>
                    Or Sign In With
                  </p>
                </Col>
                <Col md="">
                  <div
                    style={{
                      borderBottom: "2px solid ",
                      width: "100%",
                      borderColor: "#ccc",
                    }}
                  />
                </Col>
              </Row>
              <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                {socialMedia?.map((each) => (
                  <div
                    key={each.id}
                    className="icon-wrapper d-flex justify-content-center align-items-center"
                  >
                    {each.icon}
                  </div>
                ))}
              </div>
            </Row>
          </Col>
          <Col md="8" className="d-none d-md-block">
            <div
              style={{ width: "100%", height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image src={logo} rounded />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
