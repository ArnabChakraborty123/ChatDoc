"use client"

import { PropsWithChildren, useState } from "react";
import { trpc } from '@/app/_trpc/client';
import { httpBatchLink, createTRPC } from '@trpc/client';
import { Provider as TrpcProvider } from '@trpc/client';
import { QueryClient, Provider as QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    createTRPC({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
        }),
      ],
    })
  );

  return (
    <TrpcProvider 
    client={trpcClient} 
    queryClient={queryClient} >
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider> 
    </TrpcProvider>

  );
};

export default Providers;