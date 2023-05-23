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
      query(pets) {
        const body = new FormData();
        body.append('Content-Type', pets.avatar.type);
        body.append('avatar', pets.avatar);
        body.append('name', pets.name);
        body.append('birthday', pets.birthday);
        body.append('breed', pets.breed);
        body.append('comments', pets.comments);
        return { url: `pets`, method: 'POST', body, formData: true };
      },
      invalidatesTags: ['pets'],
    }),
  }),
});
export const { useDeletePetsMutation, useAddPetsMutation } = petsApi;
