import { createSelector } from "reselect";

const usersSelector = (state: any) => state.users;

export const selectUserList = createSelector(
  [usersSelector],
  (users) => users.userList
);

export const selectUser = createSelector(
  [usersSelector],
  (users) => users.user
);

export const selectError = createSelector(
  [usersSelector],
  (users) => users.error
);

export const selectSuccessUpdate = createSelector(
  [usersSelector],
  (users) => users.successUpdate
);
