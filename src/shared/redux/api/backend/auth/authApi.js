import { baseApi } from '../baseApi';
export const authApi = baseApi.injectEndpoints({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
  endpoints: builder => ({
    refresh: builder.query({
      query: () => 'auth/refresh',
    }),
    login: builder.mutation({
      query(body) {
        return { url: `auth/login`, method: 'POST', body };
      },

      invalidatesTags: ['auth'],
    }),
    register: builder.mutation({
      query(body) {
        return { url: `auth/register`, method: 'POST', body };
      },

      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation({
      query() {
        return { url: `auth/logout`, method: 'POST' };
      },
      invalidatesTags: ['auth'],
    }),
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshQuery,
  useLogoutMutation,
} = authApi;
