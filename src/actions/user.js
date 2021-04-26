export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

// Logs the user out
export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('authenticated');
        dispatch(receiveLogout());
    };
}

// TODO: 로그인하면 로그인 정보를 백에서 API를 받아와서 예외 처리하기
export function loginUser(creds) {
    return (dispatch) => {

        dispatch(receiveLogin());

        if (creds.id.length > 0 && creds.password.length > 0) {
            localStorage.setItem('authenticated', true)
        } else {
            dispatch(loginError('잘못된 정보입니다. 다시 시도해 주세요.'));
        }
    }
}
