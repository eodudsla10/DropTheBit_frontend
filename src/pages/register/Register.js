import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import Widget from '../../components/Widget';
import { registerUser, registerError } from '../../actions/register';
import Login from '../login';
import axios from 'axios';

class Register extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            email: '',
            password: '',
            name: '',
        };

        this.doRegister = this.doRegister.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.changeId = this.changeId.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changeId(event) {
        this.setState({id: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    changeConfirmPassword(event) {
        this.setState({confirmPassword: event.target.value});
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    checkPassword() {
        if (!this.isPasswordValid()) {
            if (!this.state.password) {
                this.props.dispatch(registerError("비밀번호를 입력해 주세요"));
            } else {
                this.props.dispatch(registerError("비밀번호가 일치하지 않습니다"));
            }
            setTimeout(() => {
                this.props.dispatch(registerError());
            }, 3 * 1000)
        }
    }

    isPasswordValid() {
       return this.state.password && this.state.password === this.state.confirmPassword;
    }

    doRegister(e) {
        e.preventDefault();
        
        const user = {
            user_id: this.state.id,
            email: this.state.email,
            user_pw: this.state.password,
            name: this.state.name,
        };
        axios.post(`http://127.0.0.1:8000/member/register/`, { user }).then(res => {
        console.log(res);
      })
        if (!this.isPasswordValid()) {
            this.checkPassword();
        } else {
            this.props.dispatch(registerUser({
                creds: user,
                history: this.props.history
            }));
        }
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/app'}}; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
            return (
                <Redirect to={from}/>
            );
        }

        return (
            <div className="auth-page">
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">회원가입</h3>}>
                        <p className="widget-auth-info">
                            아래 내용을 입력해 주세요.
                        </p>
                        <form onSubmit={this.doRegister}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                                <Label for="text">아이디</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="id" className="input-transparent pl-3" value={this.state.id}
                                           onChange={this.changeId} type="text"
                                           required name="text" placeholder="ID"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="mt">
                                <Label for="email">이메일</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="email" className="input-transparent pl-3" value={this.state.email}
                                           onChange={this.changeEmail} type="email"
                                           required name="email" placeholder="Email"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">비밀번호</Label>
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
                            <FormGroup>
                                <Label for="confirmPassword">비밀번호 확인</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="confirmPassword" className="input-transparent pl-3" value={this.state.confirmPassword}
                                           onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password"
                                           required name="confirmPassword" placeholder="Confirm"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="mt">
                                <Label for="text">이름</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="name" className="input-transparent pl-3" value={this.state.name}
                                           onChange={this.changeName} type="text"
                                           required name="text" placeholder="Name"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="bg-widget-transparent auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>{this.props.isFetching ? '로딩중...' : '등록하기'}</Button>
                                <p className="widget-auth-info mt-4">
                                    이미 회원이세요? 로그인 하세요!
                                </p>
                                <Link className="d-block text-center mb-4" to="login">로그인 하기</Link>
                            </div>
                        </form>
                    </Widget>
                    {/*<Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Create an account</h3>}>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Please fill all fields below*/}
                        {/*</p>*/}
                        {/*<form className="mt" onSubmit={this.doRegister}>*/}
                            {/*{*/}
                                {/*this.props.errorMessage && (*/}
                                    {/*<Alert className="alert-sm" color="danger">*/}
                                        {/*{this.props.errorMessage}*/}
                                    {/*</Alert>*/}
                                {/*)*/}
                            {/*}*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.email}*/}
                                       {/*onChange={this.changeEmail} type="text" required name="email"*/}
                                       {/*placeholder="Email"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.password}*/}
                                       {/*onChange={this.changePassword} type="password" required name="password"*/}
                                       {/*placeholder="Password"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.confirmPassword}*/}
                                       {/*onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password" required name="confirmPassword"*/}
                                       {/*placeholder="Confirm"/>*/}
                            {/*</div>*/}
                            {/*<Button type="submit" color="inverse" className="auth-btn mb-3" size="sm">{this.props.isFetching ? 'Loading...' : 'Register'}</Button>*/}
                            {/*<p className="widget-auth-info">or sign up with</p>*/}
                            {/*<div className="social-buttons">*/}
                                {/*<Button onClick={this.googleLogin} color="primary" className="social-button mb-2">*/}
                                    {/*<i className="social-icon social-google"/>*/}
                                    {/*<p className="social-text">GOOGLE</p>*/}
                                {/*</Button>*/}
                                {/*<Button onClick={this.microsoftLogin} color="success" className="social-button">*/}
                                    {/*<i className="social-icon social-microsoft"*/}
                                       {/*style={{backgroundImage: `url(${microsoft})`}}/>*/}
                                    {/*<p className="social-text">MICROSOFT</p>*/}
                                {/*</Button>*/}
                            {/*</div>*/}
                        {/*</form>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Already have the account? Login now!*/}
                        {/*</p>*/}
                        {/*<Link className="d-block text-center" to="login">Enter the account</Link>*/}
                    {/*</Widget>*/}
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
        isFetching: state.register.isFetching,
        errorMessage: state.register.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Register));

