import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

const NavBar = dynamic(import("../components/navbar/NavBar"), { ssr: false });
const Banner = dynamic(import("../components/banner/Banner"), { ssr: false });
const Values = dynamic(import("../components/values/Values"), { ssr: false });
const Convert = dynamic(import("../components/convert/Convert"), { ssr: false });
const Features = dynamic(import("../components/features/Features"), { ssr: false });
const Ekival = dynamic(import("../components/ekival/Ekival"), { ssr: false });
const Team = dynamic(import("../components/team/Team"), { ssr: false });
const Footer = dynamic(import("../components/footer/Footer"), { ssr: false });
const Timeline = dynamic(import("../components/timeline/Timeline"), { ssr: false });
const Partners = dynamic(import("../components/partners/Partners"), { ssr: false });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ekival</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
      <Values />
      <Convert />
      <Features />
      <Ekival />
      <Timeline />
      <Partners />
      <Team />
      <Footer />
    </>
  );
}
