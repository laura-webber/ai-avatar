import { Inter } from '@next/font/google';
import { Toaster } from 'react-hot-toast';
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";

import "@/styles/globals.css";

const inter = Inter({ subsets: ['latin']});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className="{inter.className}">
        <Toaster />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
