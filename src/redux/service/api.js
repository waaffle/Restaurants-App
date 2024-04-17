import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const restaurantsApi = createApi({
    reducerPath: "restaurantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/"}),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({url: "restaurants/"})
        }),
        getMenu: builder.query({
            query: (restaurantId) => ({
            url: "dishes",
            params: { restaurantId },
        })}),
        getReviews: builder.query({
            query: (restaurantId) => ({
                url: "reviews",
                params: { restaurantId },
            })}),
        getUsers: builder.query({
            query: () => ({
                url: "users/"
            })
        }),
    })
})

export const { 
    useGetRestaurantsQuery, 
    useGetMenuQuery,
    useGetReviewsQuery,
    useGetUsersQuery,
} = restaurantsApi;