import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const restaurantsApi = createApi({
    reducerPath: "restaurantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/"}),
    tagTypes: ["Reviews", "Restaurant"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({url: "restaurants/"})
        }),
        getMenu: builder.query({
            query: (restaurantId) => ({
            url: "dishes",
            params: { restaurantId },
        })
        }),
        getDish: builder.query({
            query: (dishId) => ({
                url: "dishes",
                params: { dishId },
            })
        }),
        getReviews: builder.query({
            query: (restaurantId) => ({
                url: "reviews",
                params: { restaurantId },
            }),
            providesTags: (result, error, restaurantId) => (
                result ? 
                [...result.map(({id}) => ({type: "POST", id})),
                {type: "Reviews", id: "All"},
                {type: "Restaurant", id: restaurantId}]
                :
                [{type: "Reviews", id: "All"}]
            )
        }),
        getUsers: builder.query({
            query: () => ({
                url: "users/"
            }),
            providesTags: (result, error, restaurantId) => (
                
                [{type: "Restaurant", id: restaurantId}]

            )
        }),
        createReview: builder.mutation({
            query: ({restaurantId, newReview}) => ({
                url: `review/${restaurantId}`,
                method: "POST",
                body: newReview
            }), 
            invalidatesTags: (result, error, { restaurantId }) => [
                {type: "Restaurant", id: restaurantId},
            ],
        }), 
        updateReview: builder.mutation({
            query: (review) => ({
                url: `review/${review.id}`,
                method: "PATCH",
                body: review.text
            }),
            invalidatesTags: (result, error, review) => [
                {type: "Review", id: review.id},
            ]
        })
    })
})

export const { 
    useGetRestaurantsQuery, 
    useGetMenuQuery,
    useGetDishQuery,
    useGetReviewsQuery,
    useGetUsersQuery,
    useCreateReviewMutation,
    useUpdateReviewMutation
} = restaurantsApi;