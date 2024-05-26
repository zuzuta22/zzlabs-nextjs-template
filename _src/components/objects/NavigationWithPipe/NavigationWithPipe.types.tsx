export type NavigationWithPipeType = {
  navItems: NavigationWithPipeItemType[];
}

export type NavigationWithPipeItemType = {
  url: string;
  name: string;
  /**
   * is url for the external site?
   * if it's the external site
   * isExternal should be true;
   */
  isExternal?: boolean;
}