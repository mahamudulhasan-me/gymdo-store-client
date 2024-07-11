import baseApiSlice from "../../baseApi/baseApiSlice";

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = productApiSlice;
