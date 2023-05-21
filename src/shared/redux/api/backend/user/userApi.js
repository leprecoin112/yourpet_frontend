import { baseApi } from '../baseApi';
export const userApi = baseApi.injectEndpoints({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => 'user',
      providesTags: ['user'],
    }),
    updateAvatars: builder.mutation({
      query(body) {
        return { url: `user/avatars`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    updateName: builder.mutation({
      query(body) {
        return { url: `user/name`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    updatePhone: builder.mutation({
      query(body) {
        return { url: `user/phone`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    updateCity: builder.mutation({
      query(body) {
        return { url: `user/city`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    updateBirthday: builder.mutation({
      query(body) {
        return { url: `user/birthday`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
    updateEmail: builder.mutation({
      query(body) {
        return { url: `user/email`, method: 'PATCH', body };
      },

      invalidatesTags: ['user'],
    }),
  }),
});
export const {
  useUpdateAvatarsMutation,
  useUpdateNameMutation,
  useGetUserQuery,
  useUpdatePhoneMutation,
  useUpdateCityMutation,
  useUpdateBirthdayMutation,
  useUpdateEmailMutation
} = userApi;
