export const AUTH_USER = (state, userData) => {
  state.idToken = userData.token;
  state.userId = userData.userId;
};

export const STORE_USER = (state, user) => {
  state.user = user;
};

export const SHOW_LOADING = (state, loading) => {
  state.loading = loading;
};
