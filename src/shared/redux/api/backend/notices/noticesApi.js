import { baseApi } from '../baseApi';

export const noticesApi = baseApi.injectEndpoints({
  reducerPath: 'noticesApi',
  tagTypes: ['notices', 'favorites'],
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
      query({ category, notice }) {
        const body = new FormData();
        body.append('Content-Type', notice.avatar.type);
        body.append('photo', notice.avatar);
        body.append('name', notice.name);
        body.append('title', notice.title);
        body.append('sex', notice.sex);
        body.append('birthday', notice.birthday);
        body.append('location', notice.location);
        body.append('price', notice.price);
        body.append('breed', notice.breed);
        body.append('comments', notice.comments);
        return {
          url: `notices/${category}`,
          method: 'POST',
          body,
          formData: true,
        };
      },
      invalidatesTags: ['notices'],
    }),
    addNoticeToFavorites: builder.mutation({
      query(id) {
        return { url: `notices/favorites/${id}`, method: 'POST' };
      },
      invalidatesTags: ['notices', 'favorites'],
    }),
    removeNoticeFromFavorites: builder.mutation({
      query(id) {
        return { url: `notices/favorites/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['notices', 'favorites'],
    }),
    getFavoriteNotices: builder.query({
      query: () => `notices/favorites`,
      providesTags: ['notices', 'favorites'],
    }),
    findNoticeById: builder.query({
      query: id => `notices/${id}`,
    }),
    deleteNoticeById: builder.mutation({
      query(id) {
        return { url: `notices/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['notices', 'favorites'],
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
