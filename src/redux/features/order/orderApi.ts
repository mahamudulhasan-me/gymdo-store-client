import baseApiSlice from "../../baseApi/baseApiSlice";

const orderApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
export default orderApi;
