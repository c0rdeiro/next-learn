import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

import { Metadata } from "next";
import LoginBtn from "./ui/login.btn";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  const login = async () => {
    const res = await fetch(
      "https://walletconnect-test-phi.vercel.app/api/login?redirectURL=https://next-learn-tau-beige.vercel.app/"
    );
    console.log(res);
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <LoginBtn action={login} />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="md:hidden block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          {/* <div className={styles.shape}></div> */}
          {/* <div className="h-0 w-0 border-b~-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
        </div>
      </div>
    </main>
  );
}
