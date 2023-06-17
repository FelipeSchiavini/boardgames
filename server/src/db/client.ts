import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import fetch from 'cross-fetch'
import { Config } from '../config'

export const hasuraAdminClient = new ApolloClient({
  link: new HttpLink({ uri: `${Config.hasuraUri}`, fetch }),
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-access-key ': `XXXXXXXXXXXXXXXXXX`,
    'content-type': 'application/json',
  },
})

export const hasuraHeaderConfig = {
  context: {
    headers: {
      'x-hasura-access-key': `${Config.hasuraAdminSecret}`,
      'content-type': 'application/json',
    },
  },
}
