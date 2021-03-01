import { createSelector } from "reselect";

const authSelector = (state: any) => state.auth;

export const selectToken = createSelector([authSelector], (auth) => auth.token);

export const selectErrorAuth = createSelector(
  [authSelector],
  (auth) => auth.error
);
