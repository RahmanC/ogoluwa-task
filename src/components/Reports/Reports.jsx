import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import Styles from "./Reports.module.css";

import { report } from "./data";

const Reports = () => {
  return (
    <div className="p-5 rounded">
      <h2 className="mb-3">View reports</h2>
      <div>
        <table responsive borderless className={`${Styles.table}`}>
          <thead>
            <tr className={Styles.tablehead}></tr>
          </thead>
          <tbody className="bg-white">
            {report.map((r) => (
              <>
                <tr className={Styles.tableBody}>
                  <td style={{width: '5%'}}>
                    <div class="form-check ms-3" >
                      <input
                        class={`${Styles.check} form-check-input`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>

                  <td style={{ width: "20%" }}>
                    <div className={`d-flex align-items-center`}>
                      {" "}
                      <p className={r.badge ? Styles.rep : Styles.reps }>{r.title}</p>{" "}
                      {r.badge && (
                        <button className={Styles.btn1}>NEW</button>

                      )}
                    </div>
                  </td>

                  <td>
                    <div className={Styles.text}> {r.date}</div>
                  </td>
                  <td style={{ width: "10%" }}>
                    <Button className={Styles.btn2}>View</Button>
                  </td>
                  <td>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V18.5858L6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H5ZM2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19C19.7957 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V15C22 15.7957 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7957 18 19 18H7.41421L3.70711 21.7071C3.42111 21.9931 2.99099 22.0787 2.61732 21.9239C2.24364 21.7691 2 21.4045 2 21V5C2 4.20435 2.31607 3.44129 2.87868 2.87868Z"
                        fill="#081494"
                      />
                    </svg>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
