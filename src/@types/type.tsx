import { JSX } from "react";

export interface AccommodationsProps {
  title: string;
  subtitle: string;
  description: string;
  rooms: {
    images: string[];
    title: string;
    amenities: {
      name: string;
      icon: JSX.Element;
    }[];
    popUpAmenities: {
      name: string;
    }[];
    description: string;
    actions: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: {
    review: string;
    author: string;
  }[];
  actions: {
    label: string;
    href: string;
  }[];
}
