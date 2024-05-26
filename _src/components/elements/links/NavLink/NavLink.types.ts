export type NavLinkType = {
  linkTo: string;
  linkText: string;
  isExternal? : boolean;
  toggleIsHamburgerOpen?: React.MouseEventHandler<HTMLAnchorElement>;
}