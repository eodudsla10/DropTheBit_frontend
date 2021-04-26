import {toast} from 'react-toastify';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS
    };
}

export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}

// TODO: 등록하기 동작시 객체(payload)가 동작, if문 안에 axios로 받아온 값들 코드번호로 처리하기
// payload = {
//     creds: {
//         id: this.state.id,
//         email: this.state.email,
//         password: this.state.password,
//         name: this.state.name,
//     },
//     history: this.props.history
// }

export function registerUser(payload) {
    return (dispatch) => {
        if (payload.creds.user_id.length > 0 && payload.creds.user_pw.length > 0) {
            toast.success("회원가입이 성공적으로 이루어졌습니다.");
            payload.history.push('/login');
        } else {
            dispatch(registerError('회원가입이 실패했습니다.'));
        }
    }
}
