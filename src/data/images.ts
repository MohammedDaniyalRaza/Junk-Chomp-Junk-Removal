export interface SiteImage {
  id: string;
  src: string;
  alt: string;
  aspect: "16/9" | "4/3";
}

export const SITE_IMAGES = {
  logo: {
    id: "logo",
    src: "/images/logo.png",
    alt: "Junk Chomp Junk Removal mascot logo featuring two happy dogs carrying a tire and wooden planks",
    aspect: "16/9" as const,
  },
  heroHome: {
    id: "hero-home",
    src: "/src/assets/images/hero_home_truck_1794862661389.jpg",
    alt: "Junk hauling pickup truck loaded with furniture and wood debris in front of a Colorado mountain town with snowy peaks and golden aspens",
    aspect: "16/9" as const,
  },
  heroAbout: {
    id: "hero-about",
    src: "/src/assets/images/hero_about_crew_1794862661003.jpg",
    alt: "Black junk removal work truck parked in a Western Colorado mountain driveway with straps and work gloves on the tailgate",
    aspect: "16/9" as const,
  },
  heroServices: {
    id: "hero-services",
    src: "/src/assets/images/hero_services_cleanout_1794862662099.jpg",
    alt: "Freshly swept empty Colorado residential garage looking out onto pine trees and mountain peaks",
    aspect: "16/9" as const,
  },
  heroGallery: {
    id: "hero-gallery",
    src: "/src/assets/images/hero_gallery_haul_1794862663043.jpg",
    alt: "Stacked armchair, wooden planks, boxes, and shelving staged by a mountain driveway for junk haul-away",
    aspect: "16/9" as const,
  },
  heroAreas: {
    id: "hero-areas",
    src: "/src/assets/images/hero_areas_rockies_1794862663083.jpg",
    alt: "Winding highway through the Colorado Rockies and canyon river valley with golden aspens and snowy peaks",
    aspect: "16/9" as const,
  },
  heroContact: {
    id: "hero-contact",
    src: "/src/assets/images/hero_contact_valley_1794862663569.jpg",
    alt: "Panoramic view of the Glenwood Springs river valley and surrounding Colorado mountain slopes",
    aspect: "16/9" as const,
  },
  furnitureMattresses: {
    id: "furniture-mattresses",
    src: "/src/assets/images/junk_furniture_mattresses_1794862664155.jpg",
    alt: "Old fabric sofa, wooden chest of drawers, and stacked mattresses set out on a Colorado driveway for pickup",
    aspect: "4/3" as const,
  },
  appliancesTires: {
    id: "appliances-tires",
    src: "/src/assets/images/junk_appliances_tires_1794862664370.jpg",
    alt: "Old refrigerator, washing machine, scrap metal, and stacked worn rubber car tires ready for haul-away",
    aspect: "4/3" as const,
  },
  woodYardDebris: {
    id: "wood-yard-debris",
    src: "/src/assets/images/junk_wood_yard_debris_1794862665667.jpg",
    alt: "Weathered peeling wooden fence planks, lumber scraps, and cut tree branches piled for debris removal",
    aspect: "4/3" as const,
  },
  garageCleanout: {
    id: "garage-cleanout",
    src: "/src/assets/images/junk_garage_cleanout_1794862664241.jpg",
    alt: "Packed residential garage filled with old storage boxes, patio chairs, bicycles, and household clutter ready for a cleanout",
    aspect: "4/3" as const,
  },
} as const;
