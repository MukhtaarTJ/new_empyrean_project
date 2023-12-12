import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productApi = createApi({
    reducerPath:"productApi", 
    baseQuery: fetchBaseQuery({
        baseUrl:"https://empyrean.washrytelaundry.com.ng/api/v1"
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.mutation({
            query:() => ({
                url:"/products",
                method:"GET",
            })
        })
    })
})


export const {useGetAllProductsMutation} = productApi