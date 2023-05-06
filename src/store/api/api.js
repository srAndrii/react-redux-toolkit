import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4200/recipes'

    }),
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/?_sort=id&_order=desc',
            providesTags: () => [{
                type: "Recipe"
            }]
        }),
    })

})
export const { useGetRecipesQuery } = api