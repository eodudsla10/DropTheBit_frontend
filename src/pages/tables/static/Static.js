import React from "react";
import CoinInfo from "./CoinInfo";
import {
  Row,
  Col,
  Table,
  // Progress,
  Button,
  ButtonGroup,
  // UncontrolledButtonDropdown,
  // DropdownMenu,
  // DropdownToggle,
  // DropdownItem,
  // Input,
  // Label,
  // Badge,
} from "reactstrap";
// import { Sparklines, SparklinesBars } from "react-sparklines";

import Widget from "../../../components/Widget";
import s from "./Static.module.scss";

class Static extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">
          Coin - <span className="fw-semi-bold">Tables</span>
        </h2>
        <Row>
          <Col>
            <Widget
              title={
                <h5>
                  <span className="fw-semi-bold"> 코인 프리미엄 표</span>
                </h5>
              }
              settings
              close
              bodyClass={s.mainTableWidget}
            >
              <div className="page-title">
                <span className="fw-semi-bold">기준 거래소 &nbsp;</span>
                <ButtonGroup size="sm">
                  <Button color="default" className="mr-2" size="sm">
                    Upbit
                  </Button>
                  <Button color="default" className="mr-2" size="sm">
                    Binance
                  </Button>
                  <Button color="default" className="mr-2" size="sm">
                    Coinone
                  </Button>
                </ButtonGroup>
              </div>
              <div className="page-title">
                <span className="fw-semi-bold">비교 거래소 &nbsp;</span>
                <ButtonGroup size="sm">
                  <Button color="default" className="mr-2" size="sm">
                    Upbit
                  </Button>
                  <Button color="default" className="mr-2" size="sm">
                    Binance
                  </Button>
                  <Button color="default" className="mr-2" size="sm">
                    Coinone
                  </Button>
                </ButtonGroup>
              </div>
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
                <CoinInfo></CoinInfo>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Static;
