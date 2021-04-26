import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from 'classnames';

import s from '../components/icons/Icons.module.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (<section className={`${s.root} mb-4`}>
    <h1 className="page-title">회원정보 - <span className="fw-semi-bold">보기</span></h1>

    {/* tabs */}
    <Nav className="bg-transparent" tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => { this.toggle('1'); }}
        >
          <span>관심 코인</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => { this.toggle('2'); }}
        >
          <span className="mr-xs">회원 정보</span>
        </NavLink>
      </NavItem>
    </Nav>

    {/* tab content */}

    <TabContent activeTab={this.state.activeTab}>

      <TabPane tabId="1">
        <div>
          비트코인
        </div>
      </TabPane>

      {/* tab #2 */}
      <TabPane tabId="2">
        <div>
          <h4>회원 정보</h4>
          <h5>회원 아이디 <span className="fw-semi-bold"></span></h5>
          <h5>회원 이름 <span className="fw-semi-bold"></span></h5>
          <h5>회원 이메일 <span className="fw-semi-bold"></span></h5>
        </div>
      </TabPane>
    </TabContent>
  </section>

    );
  }
}

export default Dashboard;
