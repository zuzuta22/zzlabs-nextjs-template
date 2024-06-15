export type FooterLinkType = {
  text: string;
  linkTo: string;
}

export type FooterType = {
  links: FooterLinkType[];
  copyright: string;
}