import dynamic from "next/dynamic";

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

interface HomePageProps {
  menu: Navigation;
  home: Home;
}

interface Home {
  banner: Banner;
  values: Values;
  valuesItems: ValuesItem[];
  aboutUs: AboutUs;
  features: Features;
  whyChooseUs: WhyChooseUs;
  partners: Partners;
  timeline: Timeline[];
  team: Team;
  company: Footer;
  footerLinks1: FooterLinks;
  footerLinks2: FooterLinks;
  footerLinks3: FooterLinks;
  RS: RS;
}

export default function Home({ menu, home }: HomePageProps) {
  return (
    <>
      <NavBar data={menu} company={home.company} />
      <Banner data={home?.banner} />
      <Values data={home.values} items={home.valuesItems} />
      <Convert data={home.aboutUs} />
      <Features data={home.features} />
      <Ekival data={home.whyChooseUs} />
      <Timeline data={home.timeline} />
      <Partners data={home.partners} />
      <Team data={home.team} />
      <Footer
        data={{
          ...home.company,
          footerLinks1: home.footerLinks1,
          footerLinks2: home.footerLinks2,
          footerLinks3: home.footerLinks3,
          RS: home.RS,
        }}
      />
    </>
  );
}
