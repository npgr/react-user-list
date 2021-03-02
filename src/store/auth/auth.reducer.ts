import { AnyAction } from "redux";
import AUTH_TYPES from "./auth.types";

interface IAuthState {
  initialized: boolean;
  loading: boolean;
  token: string | null;
  user: string | null;
  error: string | null;
}

const INITIAL_STATE: IAuthState = {
  initialized: false,
  loading: false,
  token: null,
  user: null,
  error: null,
};

const setToken = (state: IAuthState, { payload }: AnyAction) => ({
  ...state,
  initialized: true,
  token: payload.token,
  user: payload.user,
});

const loginPending = (state: IAuthState) => ({
  ...state,
  loading: true,
  token: null,
  error: null,
});

const loginFulfilled = (state: IAuthState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  token: payload.token,
  user: payload.user,
});

const loginRejected = (state: IAuthState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload || "User or password incorrect",
});

const logout = (state: IAuthState) => ({
  ...state,
  user: null,
  token: null,
});

const reducerMap = {
  [AUTH_TYPES.SET_TOKEN]: setToken,
  [AUTH_TYPES.LOGIN_PENDING]: loginPending,
  [AUTH_TYPES.LOGIN_FULFILLED]: loginFulfilled,
  [AUTH_TYPES.LOGIN_REJECTED]: loginRejected,
  [AUTH_TYPES.LOGOUT]: logout,
};

const reducer = (state = INITIAL_STATE, action: AnyAction): IAuthState =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state;

export default reducer;
