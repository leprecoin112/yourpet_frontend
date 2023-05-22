import { baseApi } from '../baseApi';

export const noticesApi = baseApi.injectEndpoints({
  reducerPath: 'noticesApi',
  tagTypes: ['notices'],
  endpoints: builder => ({
    getOwnNotices: builder.query({
      query: ({ page = 1, limit = 12 }) =>
        `notices?page=${page}&limit=${limit}`,
      providesTags: ['notices'],
    }),

    getAllNotices: builder.query({
      query: ({ page = 1, limit = 12 }) =>
        `notices/all?page=${page}&limit=${limit}`,
      providesTags: ['notices'],
    }),

    getNoticesByParams: builder.query({
      query: ({ title = '', category = '', page = 1, limit = 12 }) =>
        `notices/search?title=${title}&category=${category}&page=${page}&limit=${limit}`,
      providesTags: ['notices'],
    }),
    addNewNotice: builder.mutation({
      query(category, body) {
        return { url: `notices/${category}`, method: 'POST', body };
      },
      invalidatesTags: ['notices'],
    }),
    addNoticeToFavorites: builder.mutation({
      query(id) {
        return { url: `notices/favorites/${id}`, method: 'POST' };
      },
      invalidatesTags: ['notices'],
    }),
    removeNoticeFromFavorites: builder.mutation({
      query(id) {
        return { url: `notices/favorites/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['notices'],
    }),
    getFavoriteNotices: builder.query({
      query: () => `notices/favorites`,
    }),
    findNoticeById: builder.query({
      query: id => `notices/${id}`,
    }),
    deleteNoticeById: builder.mutation({
      query(id) {
        return { url: `notices/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['notices'],
    }),
  }),
});

export const {
  useGetOwnNoticesQuery,
  useGetAllNoticesQuery,
  useGetNoticesByParamsQuery,
  useAddNewNoticeMutation,
  useAddNoticeToFavoritesMutation,
  useRemoveNoticeFromFavoritesMutation,
  useGetFavoriteNoticesQuery,
  useFindNoticeByIdQuery,
  useDeleteNoticeByIdMutation,
} = noticesApi;
