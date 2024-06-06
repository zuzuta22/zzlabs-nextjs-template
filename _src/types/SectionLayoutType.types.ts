import { ReactNode } from "react";

export type SectionLayoutType = {
  children: ReactNode;
  /**
   * refer to the class name of scss/objects/_utilities/_colors.scss 
   */
  bgColorClass?: string;
};