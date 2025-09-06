import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
} from 'relay-runtime';
import { createClient, Client } from 'graphql-ws';

const HTTP_URL = import.meta.env.VITE_GRAPHQL_HTTP_URL || 'http://localhost:8080/graphql';
const WS_URL = import.meta.env.VITE_GRAPHQL_WS_URL || 'ws://localhost:8080/graphql';

async function fetchGraphQL(params: { text: string }, variables: any) {
  const resp = await fetch(HTTP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  return await resp.json();
}

let wsClient: Client | null = null;
function getWsClient() {
  if (!wsClient) {
    wsClient = createClient({
      url: WS_URL,
      connectionParams: {},
    });
  }
  return wsClient;
}

function subscribeGraphQL(operation: any, variables: any) {
  const client = getWsClient();
  return Observable.create(sink => {
    const dispose = client.subscribe(
      { query: operation.text, variables },
      {
        next: sink.next.bind(sink),
        error: sink.error.bind(sink),
        complete: sink.complete.bind(sink),
      }
    );
    return dispose;
  });
}

const network = Network.create(fetchGraphQL, subscribeGraphQL);

export const RelayEnvironment = new Environment({
  network,
  store: new Store(new RecordSource()),
});