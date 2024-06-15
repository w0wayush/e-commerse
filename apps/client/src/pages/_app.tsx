import Appbar from "@/components/Appbar";
import { InitUser } from "@/components/InitUser";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <Appbar />
          <InitUser />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}
