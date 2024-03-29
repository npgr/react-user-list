import { createSelector } from "reselect";

const authSelector = (state: any) => state.auth;

export const selectInitialized = createSelector(
  [authSelector],
  (auth) => auth.initialized
);

export const selectToken = createSelector([authSelector], (auth) => auth.token);

export const selectUser = createSelector([authSelector], (auth) => auth.user);

export const selectErrorAuth = createSelector(
  [authSelector],
  (auth) => auth.error
);
