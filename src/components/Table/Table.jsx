import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import Styles from "./Table.module.css";

const Tab = () => {
  return (
    <div>
      <section className={Styles.tableSec}>
        <Table borderless responsive>
          <thead className={Styles.TableHeadRow} >
            <tr style={{borderBottom: '1.5px solid #98A2B3'}}>
              <th>Item</th>
              <th>
                <div
                  className="d-flex align-items-center align-items-center"
                  role="button"
                >
                  Expense Category
                </div>
              </th>
              <th>
                <div
                  className="d-flex align-items-center align-items-center"
                  role="button"
                >
                  Description
                </div>
              </th>

              <th>Qty</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #E1E1E1'}}>
              <td>
                <Form>
                  <Form.Select size="md" className={`${Styles.inputItem} `}>
                    <option>Choose</option>
                    <option value="1">One</option>
                  </Form.Select>
                </Form>
              </td>

              <td>
                <Form>
                  <Form.Select size="md" className={`${Styles.inputExpense} `}>
                    <option>Choose</option>
                    <option value="1">One</option>
                  </Form.Select>
                </Form>
              </td>

              <td>
                <Form>
                  <Form.Control
                    type="text"
                    placeholder=""
                    size="md"
                    className={`${Styles.inputDesc} `}
                  />
                </Form>
              </td>

              <td>
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="1"
                    size="md"
                    className={`${Styles.inputQty} `}
                  />
                </Form>
              </td>

              <td>
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="0"
                    size="md"
                    className={`${Styles.inputPrice} `}
                  />
                </Form>
              </td>

              <td>
                <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder=""
                    size="md"
                    className={`${Styles.inputTax} me-2`}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2"
                  >
                    <path
                      d="M3 21H21"
                      stroke="#344054"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 13.5L14.5 3.50002C15.3284 2.67159 16.6716 2.67159 17.5 3.50002C18.3284 4.32845 18.3284 5.67159 17.5 6.50002L7.5 16.5L3.5 17.5L4.5 13.5Z"
                      stroke="#344054"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Form>
              </td>

              <td className="d-flex mt-2">
                <p>N0.00</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-5"
                >
                  <path
                    d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6M3 6H21H3ZM5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6H5Z"
                    stroke="#081494"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="#081494"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11V17"
                    stroke="#081494"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          <div className="flex me-5">
            <div></div>
            <div className="d-flex justify-content-end me-5">
              <p>Subtotal: </p>
              <p className="ms-5 me-2">N0.00</p>
            </div>
          </div>

          <div className="flex me-5">
            <div></div>
            <div className="d-flex justify-content-end me-5">
              <p>Total (NGN): </p>
              <p className="ms-5 me-2">N0.00</p>
            </div>
          </div>
        </div>
      </section>
      <div className="float-end me-5 mt-3">
        <Button className={Styles.cancel}>Cancel</Button>
        <Button className={Styles.save}>Save</Button>
      </div>
    </div>
  );
};

export default Tab;
