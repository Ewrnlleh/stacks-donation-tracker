"use client";

import { DevnetWalletProvider } from "../DevnetWalletProvider";
import { WalletProvider } from "@/context/WalletContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HiroWalletProvider } from "../HiroWalletProvider"; // Temporarily disabled due to @stacks/connect dependency issues

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        {/* <HiroWalletProvider> */}
          <DevnetWalletProvider>{children}</DevnetWalletProvider>
        {/* </HiroWalletProvider> */}
      </WalletProvider>
    </QueryClientProvider>
  );
}
