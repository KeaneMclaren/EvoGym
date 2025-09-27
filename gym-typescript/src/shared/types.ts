import type { ReactElement, ReactNode } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: ReactElement;
  title: string;
  description: string;
}