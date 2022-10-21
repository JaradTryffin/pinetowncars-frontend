import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-api2.p.rapidapi.com/api/",
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => ({
        url: "makes",
        headers: {
          "X-RapidAPI-Key":
            "777bdfc980mshae3efd6fe82fe27p11d361jsn0e4afdb18bd7",
          "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
        },
      }),
    }),
    getModels: builder.query({
      query: (model) => ({
        url: `models?year=2020&make=${model}`,
        headers: {
          "X-RapidAPI-Key":
            "777bdfc980mshae3efd6fe82fe27p11d361jsn0e4afdb18bd7",
          "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetVehiclesQuery, useGetModelsQuery } = productApi;
