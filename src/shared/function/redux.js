export const pending = state => {
  state.isLoading = true;
  state.error = null;
};

export const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const fulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isLogin = true;
  state.user = payload.user;
  state.token = payload.token;
  state.error = null;
};
