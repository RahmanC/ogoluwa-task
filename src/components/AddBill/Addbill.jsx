import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import Tab from "../Table/Table";
import Styles from "./Addbill.module.css";
import { BiUpload} from 'react-icons/bi'

const Addbill = () => {
  const [date, setDate] = useState();

  return (
    <div className="p-5 rounded">
      <h2>Add bill</h2>
      <>
        <Row className="p-5">
          <Form>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Vendor</Form.Label>
                  <Form.Select size="lg">
                    <option>Choose</option>
                    <option value="1">One</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    size="lg"
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Bill #</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Currency</Form.Label>
                      <Form.Select size="lg">
                        <option>USD - U.S dollar</option>
                        <option value="1">NGN - Naira</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Due Date</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        size="lg"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">

                      <Form.Label>Upload Copy of Bill
                      <Form.Control type="file" size='lg' hidden />
                      <div className={Styles.upload}>
                      <Form.Control type="text" size="lg" placeholder="Upload File" className="mt-2" style={{width: '22vw'}}/>
                        <BiUpload className={Styles.icon} />
                      </div>
                      </Form.Label>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>P.O. / S.O</Form.Label>
                      <Form.Control type="text" size="lg" placeholder="" />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={4} size='lg' />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Row>

        <Tab />
      </>
    </div>
  );
};

export default Addbill;
