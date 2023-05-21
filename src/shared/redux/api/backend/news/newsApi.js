import { baseApi } from '../baseApi';
export const newsApi = baseApi.injectEndpoints({
  reducerPath: 'newsApi',
  tagTypes: ['news'],
  endpoints: builder => ({
    allNews: builder.query({
      query: (page = 1, limit = 6) => `news?page=${page}&limit=${limit}`,
      providesTags: ['user'],
    }),
    searchNews: builder.query({
      query: (title = '', page = 1, limit = 6) =>
        `news/search?title=${title}&page=${page}&limit=${limit}`,
      providesTags: ['user'],
    }),
  }),
});
export const { useAllNewsQuery, useSearchNewsQuery } = newsApi;
