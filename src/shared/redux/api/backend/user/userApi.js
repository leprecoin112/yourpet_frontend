import { baseApi } from '../baseApi';
export const userApi = baseApi.injectEndpoints({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => 'user',
    }),
    avatars: builder.mutation({
      query(body) {
        return { url: `user/avatars`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    name: builder.mutation({
      query(body) {
        return { url: `user/name`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    phone: builder.mutation({
      query(body) {
        return { url: `user/phone`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    city: builder.mutation({
      query(body) {
        return { url: `user/city`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    birthday: builder.mutation({
      query(body) {
        return { url: `user/birthday`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
  }),
});
export const {
  useAvatarsMutation,
  useNameMutation,
  useGetUserQuery,
  usePhoneMutation,
  useCityMutation,
  useBirthdayMutation,
} = userApi;
