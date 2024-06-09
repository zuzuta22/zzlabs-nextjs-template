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

export const FooterBrandBoxLeftContext = {
  contentTop: {
    text: "About My Service"
  },
  contentBottom: {
    linkTo: "#",
    imageItem: {
      srcPC:"magazine-mock-site/images/brand_logo.png",
        srcSP: "magazine-mock-site/images/brand_logo.png",
        srcWebpPC: "magazine-mock-site/images/brand_logo.png.webp",
        srcWebpSP: "magazine-mock-site/images/brand_logo.png.webp",
        widthPC: 240,
        heightPC: 40,
        widthSP: 240,
        heightSP: 40,
        altText: "myu31 project magazine is here",
    }
  }
}

export const FooterBrandBoxRightContext = {
  contentTop: {
    text: "Download Our App"
  },
  contentBottom: {
    appleBadgeItem: {
      linkTo: '#',
      src: "images/badge_apple_store.png",
      alt: "Get our app from Apple Store"
    },
    googleBadgeItem: {
      linkTo: '#',
      src: "images/badge_google_store.png",
      alt: "Get our app from Google Store"
    }
  }
}