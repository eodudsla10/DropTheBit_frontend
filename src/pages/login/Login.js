import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import Widget from '../../components/Widget';
import { loginUser } from '../../actions/user';
import axios from 'axios';

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        if (token) return true;
    }

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: '',
        };

        this.doLogin = this.doLogin.bind(this);
        this.changeId = this.changeId.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    changeId(event) {
        this.setState({ id: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    doLogin(e) {
        e.preventDefault();
        // TODO: 로그인하면 로그인 정보를 백에서 API를 받아와서 예외 처리하기
        // 여기를 작성해 주세요.
        axios.get(`http://127.0.0.1:8000/member/login/`, {params:{ user_id: this.state.id, user_pw: this.state.password }}).then(res => {
        console.log(res)});
        this.props.dispatch(loginUser({ id: this.state.id, password: this.state.password }));
    }

    signUp() {
        this.props.history.push('/register');
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div className="auth-page">
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">로그인</h3>}>
                        <p className="widget-auth-info">
                            로그인을 위해 아이디를 입력해 주세요.
                        </p>
                        <form onSubmit={this.doLogin}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                                <Label for="id">ID</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="id" className="input-transparent pl-3" value={this.state.id} onChange={this.changeId} type="id"
                                           required name="id" placeholder="ID"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="password" className="input-transparent pl-3" value={this.state.password}
                                           onChange={this.changePassword} type="password"
                                           required name="password" placeholder="Password"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="bg-widget auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>
                                  <span className="auth-btn-circle" style={{marginRight: 8}}>
                                    <i className="la la-caret-right"/>
                                  </span>
                                  {this.props.isFetching ? '로딩중...' : '로그인'}
                                </Button>
                                <p className="widget-auth-info mt-4">
                                    회원이 아니세요? 지금 회원가입 하세요!
                                </p>
                                <Link className="d-block text-center mb-4" to="register">회원가입 하기</Link>
                            </div>
                        </form>
                    </Widget>
                </Container>
                <footer className="auth-footer">
                {new Date().getFullYear()} &copy; Light Blue Template - React Admin Dashboard Template Made by <a href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic LLC</a>.
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Login));

