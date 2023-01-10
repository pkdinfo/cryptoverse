import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'X-RapidAPI-Key': '487b191e2emsh32db556e4acf2a6p134d97jsnf50350ed8845',
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createrequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
	reducerPath: 'createApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCrypto: builder.query({
			query: (count) => createrequest(`/coins?limit=${count}`),
        }),
		getCryptoDetails : builder.query({
			query: (coinId) => createrequest (`coins/${coinId}`),
		}),
		getExchanges : builder.query({
			query: () => createrequest (`/exchanges`),
		})
	})
});

export const { useGetCryptoQuery, getExchanges, getCryptoDetails} = cryptoApi;

//const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '487b191e2emsh32db556e4acf2a6p134d97jsnf50350ed8845',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
