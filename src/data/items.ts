import { SITE_IMAGES, type SiteImage } from "./images";

export interface ChompPanelItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  bullets: string[];
  accent: "lime" | "pink";
  image: SiteImage;
}

export type GalleryCategory = "All" | "Furniture" | "Appliances" | "Yard & Wood" | "Cleanouts";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  location: string;
  caption: string;
  image: SiteImage;
  rotationClass: string;
}

export const CHOMP_PANELS: ChompPanelItem[] = [
  {
    id: "furniture",
    number: "01",
    title: "Furniture & Mattresses",
    tag: "BULKY STUFF",
    summary: "Old couches, dressers, dining tables, and worn mattresses gone in one trip.",
    bullets: ["Sofas & loveseats", "Mattresses & box springs", "Heavy wood dressers"],
    accent: "lime",
    image: SITE_IMAGES.furnitureMattresses,
  },
  {
    id: "appliances",
    number: "02",
    title: "Appliances & Old Tires",
    tag: "HEAVY LIFTING",
    summary: "Fridges, washers, scrap metal, and stacks of old tires lifted and loaded for you.",
    bullets: ["Refrigerators & washers", "Scrap metal & shop gear", "Stacked auto tires"],
    accent: "pink",
    image: SITE_IMAGES.appliancesTires,
  },
  {
    id: "yard-wood",
    number: "03",
    title: "Yard & Wood Debris",
    tag: "OUTDOOR PILES",
    summary: "Peeling fence planks, lumber scraps, cut limbs, and brush piles cleared clean.",
    bullets: ["Wood & lumber debris", "Yard waste & brush", "Construction leftovers"],
    accent: "lime",
    image: SITE_IMAGES.woodYardDebris,
  },
  {
    id: "cleanouts",
    number: "04",
    title: "Garage & Basement Cleanouts",
    tag: "FULL RESETS",
    summary: "From packed corners to full two-car bays — general household junk swept out fast.",
    bullets: ["Garage & basement clear-outs", "Boxed clutter & old bikes", "Clean floor finish"],
    accent: "pink",
    image: SITE_IMAGES.garageCleanout,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Driveway Sofa & Mattress Haul",
    category: "Furniture",
    location: "Glenwood Springs, CO",
    caption: "Worn-out loveseat, solid wood dresser, and stacked mattresses loaded up for a fast move-out.",
    image: SITE_IMAGES.furnitureMattresses,
    rotationClass: "-rotate-1",
  },
  {
    id: "gal-2",
    title: "Shop Appliances & Tire Stack",
    category: "Appliances",
    location: "Carbondale, CO",
    caption: "Old fridge, washing machine, scrap metal bin, and four worn tires cleared out from the barn.",
    image: SITE_IMAGES.appliancesTires,
    rotationClass: "rotate-1",
  },
  {
    id: "gal-3",
    title: "Fence Planks & Tree Brush Pile",
    category: "Yard & Wood",
    location: "Basalt, CO",
    caption: "Peeling painted fence boards, scrap 2x4s, and cut tree limbs removed from a long mountain drive.",
    image: SITE_IMAGES.woodYardDebris,
    rotationClass: "-rotate-1",
  },
  {
    id: "gal-4",
    title: "Full Garage Clutter Reset",
    category: "Cleanouts",
    location: "Aspen, CO",
    caption: "Boxes, old bikes, broken patio chairs, and lumber cleared out to make room for winter gear.",
    image: SITE_IMAGES.garageCleanout,
    rotationClass: "rotate-1",
  },
  {
    id: "gal-5",
    title: "Spotless Swept Two-Car Bay",
    category: "Cleanouts",
    location: "Snowmass, CO",
    caption: "After the final load — clean concrete floor and open mountain view ready for parking.",
    image: SITE_IMAGES.heroServices,
    rotationClass: "-rotate-1",
  },
  {
    id: "gal-6",
    title: "Loaded High-Rail Hauling Run",
    category: "Furniture",
    location: "Aspen, CO",
    caption: "Wooden chairs, dressers, and remodel planks packed tight for a morning mountain haul.",
    image: SITE_IMAGES.heroHome,
    rotationClass: "rotate-1",
  },
  {
    id: "gal-7",
    title: "Staged Driveway Cleanout Pile",
    category: "Yard & Wood",
    location: "Rifle, CO",
    caption: "Vintage armchair, stacked barn wood, metal shelving, and rolled carpet hauled in one run.",
    image: SITE_IMAGES.heroGallery,
    rotationClass: "-rotate-1",
  },
  {
    id: "gal-8",
    title: "Morning Rig Ready on Driveway",
    category: "Appliances",
    location: "New Castle, CO",
    caption: "Straps coiled, bed cleared, and crew ready for another Western Slope appliance and junk pickup.",
    image: SITE_IMAGES.heroAbout,
    rotationClass: "rotate-1",
  },
];
