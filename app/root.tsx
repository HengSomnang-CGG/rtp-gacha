import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announment";
import Jackpot from "./components/Jackpot";
import GameProviders from "~/components/GameProviders";
import HeroSection from "~/components/HeroSection";
import Transaction from "~/components/Transation/Transation";
import Informasi from "./components/Informasi";
import { lazy, Suspense, useState } from "react";
// import Sidebar from "./components/Sidebar";

const Sidebar = lazy(() => import("./components/Sidebar"));

export const links: LinksFunction = () => [

];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="id"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" as="image" href="/logo.webm"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="https://barkinbeanscoffeeco.com/storage/webpersonalize/ba8fe2f9-0def-44f5-afa9-af17749d775f.png"></link>
        <title>Raja Gacha: Situs Gacha Slot Gacor Gampang Menang Pragmatic Play</title>
        {/* <meta name="robots" content="index,follow"></meta>
        <meta name="description" content="Raja Gacha adalah situs gacha slot gacor gampang menang pragmatic play anti rungkad dengan rtp slot terupdate, buruan cobain game gacha slot auto bikin kaya raya to the moon."></meta>
        <meta property="og:title" content="Raja Gacha: Situs gacha Slot Gacor Gampang Menang Pragmatic Play"></meta>
        <meta property="og:description" content="Raja Gacha adalah situs gacha slot gacor gampang menang pragmatic play anti rungkad dengan rtp slot terupdate, buruan cobain game gacha slot auto bikin kaya raya to the moon."></meta>
        <meta name="google-site-verification" content="<meta name=&quot;google-site-verification&quot; content=&quot;fmJgEDv98BjFvMCXr58_h2rFeMJLyT7KKfGshBMhP3c&quot; />"></meta>
        <meta name="og:type" content="website"></meta> */}
         <link rel="amphtml" href="https://www.spaceman88-amp.com/" />
        <Meta />
        <Links />
      </head>
      <body className="m-auto p-auto">
        <Suspense fallback={<div>Loading...</div>}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </Suspense>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col relative h-full">
            <Header toggleSidebar={toggleSidebar} />
            <Banner />
            <Announcement />
            <Navbar />
            <div className="relative lg:px-10">
              <Jackpot />
            </div>
          </div>
        </div>
        {children}
        <Transaction />
        <div className=" flex flex-1 flex-col mx-3">
          <HeroSection />
          <GameProviders />
          <Informasi />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
