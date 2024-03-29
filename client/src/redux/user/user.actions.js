import { 
    CHECK_USER_SESSION,
    EMAIL_SIGN_IN_START,
    GOOGLE_SIGN_IN_START, 
    SIGN_IN_FAILURE, 
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "./user.types";

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = user => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = errorMessage => ({
    type: SIGN_IN_FAILURE,
    payload: errorMessage
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

export const signOutFailure = errorMessage => ({
    type: SIGN_OUT_FAILURE,
    payload: errorMessage
});

export const signUpStart = userCredentials => ({
    type: SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = errorMessage => ({
    type: SIGN_UP_FAILURE,
    payload: errorMessage
})