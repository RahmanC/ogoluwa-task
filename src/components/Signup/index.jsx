import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "./bg.png";
import style from "./index.module.css";

const Signup = () => {
  return (
    <div className={style.main}>
      <div className={style.main_container}>
        <div className={style.image}>
          <img src={image} alt="background" width={707} height={900} />
          <p className={style.text}>
            Building exceptional <br /> services with Back Office <br />
            Support and Business <br />
            Perfomance
          </p>
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Create Account</h1>
          <p className={style.heading}>Build an exceptional business</p>

          <div>
            <Row className="mb-5 mt-5">
              <Col md={6}>
                <label
                  for="exampleInputEmail1"
                  class={`${style.label} form-label`}
                >
                  First Name
                </label>
                <input
                  type="email"
                  class={`${style.input} form-control`}
                  placeholder="Ogoluwa"
                  aria-describedby="emailHelp"
                />
              </Col>

              <Col md={6}>
                <label
                  for="exampleInputEmail1"
                  class={`${style.label} form-label`}
                >
                  Last Name
                </label>
                <input
                  type="email"
                  class={`${style.input} form-control`}
                  placeholder="Enter your last name"
                  aria-describedby="emailHelp"
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <label
                  for="exampleInputEmail1"
                  class={`${style.label} form-label`}
                >
                  Phone Number
                </label>
                <input
                  type="email"
                  class={`${style.input} form-control`}
                  placeholder="Enter your phone number"
                  aria-describedby="emailHelp"
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <label
                  for="exampleInputEmail1"
                  class={`${style.label} form-label`}
                >
                  Email address
                </label>
                <input
                  type="email"
                  class={`${style.input} form-control`}
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <label
                  for="exampleInputEmail1"
                  class={`${style.label} form-label`}
                >
                  Password
                </label>
                <input
                  type="email"
                  class={`${style.input} form-control`}
                  placeholder="Enter your password"
                  aria-describedby="emailHelp"
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class={`${style.check} form-check-input`}
                    id="exampleCheck1"
                  />
                  <label
                    class={`${style.checkText} form-check-label`}
                    for="exampleCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </Col>

              <Col md={6}>
                <p style={{ color: "#3DB0FF" }}>Forgot Password?</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Button vvariant="primary" size="lg" className={style.button}>
                Sign Up
              </Button>
            </Row>

            <div className={style.account}>
              <div className={style.line}></div>
              <div>
                Got an Account?{" "}
                <span>
                  {" "}
                  <Link
                    to="/layout/bill"
                    style={{ color: "#3DB0FF", textDecoration: "none" }}
                  >
                    Sign In
                  </Link>{" "}
                </span>
              </div>
              <div className={style.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
