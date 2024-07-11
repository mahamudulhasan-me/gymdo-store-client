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
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productApiSlice;
