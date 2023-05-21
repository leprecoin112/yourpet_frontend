import { baseApi } from '../baseApi';
export const newsApi = baseApi.injectEndpoints({
  reducerPath: 'newsApi',
  tagTypes: ['news'],
  endpoints: builder => ({
    allNews: builder.query({
      query: () => 'news',
    }),

    searchNews: builder.query({
      query: (title = '', page = 1, limit = 6) =>
        `news/search?title=${title}?page=${page}?limit=${limit}`,
    }),
  }),
});
export const { useAllNewsQuery, useSearchNewsQuery } = newsApi;
