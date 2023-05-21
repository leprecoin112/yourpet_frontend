import { baseApi } from '../baseApi';
export const sponsorsApi = baseApi.injectEndpoints({
  reducerPath: 'sponsorsApi',
  tagTypes: ['sponsors'],
  endpoints: builder => ({
    allSponsors: builder.query({
      query: () => `sponsors`,
      invalidatesTags: ['sponsors'],
    }),
  }),
});
export const { useallSponsorsQuery, useSearchNewsQuery } = sponsorsApi;
