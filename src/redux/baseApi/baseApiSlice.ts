import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1440/api/",
  }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});

export default baseApiSlice;
