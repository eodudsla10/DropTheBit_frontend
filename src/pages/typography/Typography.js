import React from "react";
import { Row, Col, Table } from "reactstrap";

import Widget from "../../components/Widget";
import UpbitNotices from "./UpbitNotices";

const Typography = () => (
  <div>
    <h1 className="page-title">
      업비트 - <span className="fw-semi-bold">정보 보기</span>
    </h1>
    <Row>
      <Col>
        <Widget>
          <h4>업비트 공지사항</h4>
          <Table striped>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down" width="3">
                      #
                    </th>
                    <th className="hidden-sm-down" width="3">
                      Thicker
                    </th>
                    <th className="hidden-sm-down" width="3">
                      Coin name(english)
                    </th>
                    <th className="hidden-sm-down" width="3">
                      Standard_price
                    </th>
                    <th className="hidden-sm-down" width="3">
                      Comparison_price
                    </th>
                    <th className="hidden-sm-down" width="3">
                      Premium
                    </th>
                  </tr>
                </thead>
                <UpbitNotices></UpbitNotices>
              </Table>
          {/* <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p>
              You can use the mark tag to highlight text.
            </p>
            <p>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
          </div>
          <h4 className="mt-5">Font weights</h4>
          <p>Various font weights supported</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p>Thin (default) font weight</p>
            <p className="fw-normal">Normal font weight</p>
            <p className="fw-semi-bold">
              Semi bold to empasize important thing
            </p>
            <p className="fw-bold">Bold font as a high priority</p>
          </div>
          <h4 className="mt-5">Colors</h4>
          <p>Bootstrap state colors can be applied to texts too</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-danger">Some danger text</p>
            <p className="text-warning">Some warning text</p>
            <p className="text-success">Some succes text</p>
            <p className="text-primary">Some primary text</p>
            <p className="text-info">Some info text</p>
          </div>
          <h4 className="mt-5">Blockquotes</h4>
          <p>Citing someone is really easy</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <blockquote className="blockquote">
              <p>
                Don&apos;t get set into one form, adapt it and build your own,
                and let it grow, be like water. Empty your mind, be formless,
                shapeless — like water. Now you put water in a cup, it becomes
                the cup; You put water into a bottle it becomes the bottle; You
                put it in a teapot it becomes the teapot. Now water can flow or
                it can crash. Be water, my friend.
              </p>
              <footer className="blockquote-footer">
                Bruce Lee in{" "}
                <cite title="A Warrior's Journey">
                  A Warrior&apos;s Journey
                </cite>
              </footer>
            </blockquote>
          </div> */}
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Typography;
