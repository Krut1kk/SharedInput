// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// base url
import { baseURL } from "../libs/constants/baseURL";

export const strapiAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,

    prepareHeaders: (headers) => {
      return headers;
    },
  }),

  endpoints: (_builder) => ({}),
});





