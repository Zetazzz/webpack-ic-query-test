import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRpcClient } from 'interchain-query';

const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <TestSub></TestSub>
      </QueryClientProvider>
  );
};

export const TestSub = () => {
  const rpcEndpoint = 'https://rpc.cosmos.directory/cosmoshub';

  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: !!rpcEndpoint,
    },
  });

  console.log({
    rpcEndpoint,
    rpcClient,
  });

  return (
      <div>Hello from Webpack with React & TypeScript!</div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

