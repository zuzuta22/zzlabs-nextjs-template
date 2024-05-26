import { SiteLogoType } from "@/_src/components/elements/images/SiteLogo/SiteLogo.types";
import { NavigationWithPipeType } from "@/_src/components/objects/NavigationWithPipe/NavigationWithPipe.types";

export const LogoContext: SiteLogoType = {
  srcPC: '/magazine-mock-site/svg/sitelogo.svg',
  srcSP: '/magazine-mock-site/svg/sitelogo.svg',
  widthPC: 200,
  heightPC: 20,
  altText: 'Mock Site - zzlabs',
  linkTo: '/'
}

export const NavigationItemsContext: NavigationWithPipeType = {
  navItems : [
    {url: '#', name: 'News'},
    {url: '#', name: 'About Us'},
    {url: '#', name: 'How To'},
    {url: '#', name: 'Special'},
    {url: 'https://google.com', name: 'Google', isExternal: true}
  ]
}