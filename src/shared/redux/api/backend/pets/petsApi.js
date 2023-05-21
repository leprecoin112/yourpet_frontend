import { baseApi } from '../baseApi';
export const petsApi = baseApi.injectEndpoints({
  reducerPath: 'petsApi',
  tagTypes: ['pets'],
  endpoints: builder => ({
    deletePets: builder.mutation({
      query(id) {
        return { url: `pets/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['pets'],
    }),

    addPets: builder.mutation({
      query(body) {
        return { url: `pets`, method: 'POST', body };
      },
      invalidatesTags: ['pets'],
    }),
  }),
});
export const { useDeletePetsMutation, useAddPetsMutation } = petsApi;
