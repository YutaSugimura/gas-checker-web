import type { AppProps } from "next/app";
import { FirebaseContext } from "../context/firebase";
import "../styles/globals.css";

// MSW
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../.mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext>
      <Component {...pageProps} />
    </FirebaseContext>
  );
}

export default MyApp;
