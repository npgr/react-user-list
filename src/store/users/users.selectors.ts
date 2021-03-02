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

export const selectPages = createSelector([usersSelector], (users) => ({
  page: users.page,
  totalPages: users.totalPages,
}));
