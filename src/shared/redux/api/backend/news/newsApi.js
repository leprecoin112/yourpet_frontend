import { baseApi } from '../baseApi';
export const newsApi = baseApi.injectEndpoints({
  reducerPath: 'newsApi',
  tagTypes: ['news'],
  endpoints: builder => ({
    allNews: builder.query({
      query: (page = 1, limit = 6) => `news?page=${page}&limit=${limit}`,
      providesTags: ['news'],
    }),
    news: builder.query({
      query: ({ title, page, limit }) =>
        `news/search?title=${title}&page=${page}&limit=${limit}`,

      providesTags: ['news'],
    }),
  }),
});
export const { useAllNewsQuery, useNewsQuery } = newsApi;
