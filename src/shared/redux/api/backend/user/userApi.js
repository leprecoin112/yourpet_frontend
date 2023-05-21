import { baseApi } from '../baseApi';
export const userApi = baseApi.injectEndpoints({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => 'user',
      providesTags: ['user', "pets"],
    }),
    getUserPets: builder.query({
      query: () => 'user/pets',
      providesTags: ['user'],
    }),
    updateAvatars: builder.mutation({
      query(file) {
        const body = new FormData();
        body.append('Content-Type', file.type);
        body.append('avatar', file);
        return { url: `user/avatars`, method: 'PATCH', body, formData: true };
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
  useGetUserPetsQuery,
  useUpdatePhoneMutation,
  useUpdateCityMutation,
  useUpdateBirthdayMutation,
  useUpdateEmailMutation,
} = userApi;
