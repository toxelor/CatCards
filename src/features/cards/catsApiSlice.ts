import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Cat {
    breeds: Breed
    id: string
    url: string
}

interface Breed {
    weight: {imperical: string, metric: string}
    name: string
    vetstreet_url: string
    temperament: string
    origin: string
    description: string
    life_span: string
    indoor: number
    lap: number
    alt_names: string
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
}


export const catsApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${import.meta.env.VITE_REACT_APP_API_KEY}` }),
    reducerPath: "catsApi",
    tagTypes: ["Cats"],
    endpoints: build => ({
      getCats: build.query<Array<Cat>, number>({
        query: (limit = 10) => `&limit=${limit}`,
      }),
    }),
  })

  export const { useGetCatsQuery } = catsApiSlice
  