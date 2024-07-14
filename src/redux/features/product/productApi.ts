import baseApiSlice from "../../baseApi/baseApiSlice";

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        let queryString = "";

        if (query.category) {
          queryString += `category=${query.category}&`;
        }
        if (query.price) {
          queryString += `price=${query.price}&`;
        }
        if (query.brand) {
          queryString += `brand=${query.brand}&`;
        }

        return {
          url: `products?${queryString}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "Products", id: "LIST" }]
          : [{ type: "Products", id: "LIST" }],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productApiSlice;
