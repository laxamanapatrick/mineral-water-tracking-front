// import axios from "axios";

// export default axios.create({
//   baseURL: "https://watermonitoringsystem.azurewebsites.net/api/",
//   headers: {
//     "Content-Type": "application/json",
//     // Authorization: "Bearer " + user?.token,
//   },
// });



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://watermonitoringsystem.azurewebsites.net/api/",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getAdmins: builder.query({
      query: () => `User`,
    }),
  }),
});

export const { useGetAdminsQuery } = jsonServerApi;
