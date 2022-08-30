// Redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const providerAdapter = createEntityAdapter();
const initialState = providerAdapter.getInitialState();

export const sportalApi = createApi({
  reducerPath: "sportalApi",

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SPORTAL_LOCAL }),
  tagTypes: ["Providers"],
  
  endpoints: (builder) => ({
    getProviders: builder.query({
      query: () => '/providers',
      providesTags: ["Providers"],
      transformResponse: (response: any) => {
        let i = 0
        const providers = response.map((provider: any) => {
          provider.id = i
          i++
          return provider
        })
        console.log('transformResponse', providers)
        return providerAdapter.setAll(initialState, response);
      }
    }),
  }),
});

export const { useGetProvidersQuery } = sportalApi;

// returns the query result object
export const selectProvidersResult = sportalApi.endpoints.getProviders.select("");

// Creates memoized selector
const selectProvidersData: any = createSelector(
  selectProvidersResult,
  (providersResult) => providersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProviders,
  // Pass in a selector that returns the posts slice of state
} = providerAdapter.getSelectors(
  (state) => selectProvidersData(state) ?? initialState
);