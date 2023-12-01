import api from "../../store/api";

//Here lies the endpoints for the charities
const charityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //This is useGetCharitiesQuery
    getCharities: builder.query({
      //we are grabbing the charities api with the route /api/charities
      //so for all the queries, they will start with /charities
      query: () => "/charities",

      providesTags: ["Charities"],
    }),

    //This is useGetCharityQuery
    getCharity: builder.query({
      query: (id) => `/charities/${id}`,

      providesTags: ["Charity"],
    }),

    //This is useCreateCharityMutation
    createCharity: builder.mutation({
      query: (charity) => ({
        url: "/charities",
        method: "POST",
        body: charity,
      }),
      invalidatesTags: ["Charities"],
    }),

    //This is useDeleteCharityMutation
    deleteCharity: builder.mutation({
      query: (id) => ({
        url: `/charities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Charities"],
    }),

    //This is useUpdateCharityMutation
    updateCharity: builder.mutation({
      query: (updatedCharity) => ({
        url: `/charities/${updatedCharity.id}`,
        method: "PATCH",
        body: updatedCharity,
      }),
      invalidatesTags: ["Charity"],
    }),
  }),
});

export const {
  useGetCharitiesQuery,
  useGetCharityQuery,
  useCreateCharityMutation,
  useDeleteCharityMutation,
  useUpdateCharityMutation,
} = charityApi;
