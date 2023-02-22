interface CallToAction {
  id: number;
  label: string;
  path: string;
  target: "_blank" | "_self" | "_parent" | "_top";
}

interface NavigationItem extends CallToAction {
  name: string;
}

interface Navigation {
  items: NavigationItem[];
}

interface TitleDescription {
  title: string;
  description: string;
  color: string;
}

interface Image {
  url: string;
  alt: string;
  placeholder: string;
}

interface TitleDescriptionImage extends TitleDescription {
  media: Image;
}

interface Banner extends TitleDescriptionImage {
  button: CallToAction;
  video: CallToAction;
  color: string;
}

interface Values {
  title: string;
  color: string;
}

interface ValuesItem extends TitleDescription {
  button: CallToAction;
}

interface ValuesItems {
  items: ValuesItem[];
}

interface AboutUs extends TitleDescriptionImage {
  button: CallToAction;
  video: CallToAction;
}

interface Features {
  title: string;
  color: string;
  items: TitleDescription[];
}

interface WhyChooseUs extends TitleDescriptionImage {
  button: CallToAction;
}

interface Partners extends TitleDescription {
  medias: Image[];
}

interface Timeline {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  id: number;
}

interface TeamItem {
  name: string;
  role: string;
  media: Image;
}

interface Team extends TitleDescription {
  items: TeamItem[];
}

interface Company {
  name: string;
  logoDark: Image;
  logoLight: Image;
  description: string;
  favicon: Image;
  name: string;
}

interface Footer extends Company {
  footerLinks1: FooterLinks;
  footerLinks2: FooterLinks;
  footerLinks3: FooterLinks;
  RS: RS;
}

interface FooterLinks {
  title: string;
  items: CallToAction[];
}

interface RS {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
}
