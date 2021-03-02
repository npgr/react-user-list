import { AnyAction } from "redux";
import { UserDetail, User } from "../../models/user";
import USER_TYPES from "./users.types";

interface IUserState {
  loading: boolean;
  successUpdate: string | null;
  error: string | null;
  userList: User[];
  user: UserDetail | null;
}

const INITIAL_STATE = {
  loading: false,
  successUpdate: null,
  error: null,
  userList: [],
  user: null,
};

const getUserListPending = (state: IUserState) => ({
  ...state,
  loading: true,
});

const getUserListFulfilled = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  userList: payload,
});

const getUserListRejected = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload.error || "Error Loading User List",
});

const getUserPending = (state: IUserState) => ({
  ...state,
  loading: true,
});

const getUserFulfilled = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  user: payload,
});

const getUserRejected = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload.error || "Error Loading User",
});

const deleteUserPending = (state: IUserState) => ({
  ...state,
  loading: true,
});

const deleteUserFulfilled = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  user: {},
  successUpdate: "User Successfully deleted",
});

const deleteUserRejected = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload.error || "Error deleting User",
});

const changeUserPending = (state: IUserState) => ({
  ...state,
  loading: true,
});

const changeUserFulfilled = (state: IUserState) => ({
  ...state,
  loading: false,
  user: {},
  successUpdate: "User Successfully updated",
});

const changeUserRejected = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload.error || "Error Changing User",
});

const clearMessage = (state: IUserState) => ({
  ...state,
  successUpdate: null,
  error: null,
});

const reducerMap = {
  [USER_TYPES.GET_USER_LIST_PENDING]: getUserListPending,
  [USER_TYPES.GET_USER_LIST_FULFILLED]: getUserListFulfilled,
  [USER_TYPES.GET_USER_LIST_REJECTED]: getUserListRejected,
  [USER_TYPES.GET_USER_PENDING]: getUserPending,
  [USER_TYPES.GET_USER_FULFILLED]: getUserFulfilled,
  [USER_TYPES.GET_USER_REJECTED]: getUserRejected,
  [USER_TYPES.CHANGE_USER_PENDING]: changeUserPending,
  [USER_TYPES.CHANGE_USER_FULFILLED]: changeUserFulfilled,
  [USER_TYPES.CHANGE_USER_REJECTED]: changeUserRejected,
  [USER_TYPES.DELETE_USER_PENDING]: deleteUserPending,
  [USER_TYPES.DELETE_USER_FULFILLED]: deleteUserFulfilled,
  [USER_TYPES.DELETE_USER_REJECTED]: deleteUserRejected,
  [USER_TYPES.CLEAR_MESSAGES]: clearMessage,
};

const reducer = (state = INITIAL_STATE, action: AnyAction): IUserState =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state;

export default reducer;
