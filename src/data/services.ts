import { SITE_IMAGES, type SiteImage } from "./images";

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  accent: "lime" | "pink";
  image: SiteImage;
}

export interface QuoteFactor {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const WHAT_WE_TAKE_LIST: string[] = [
  "Furniture",
  "Mattresses",
  "Appliances",
  "Old tires",
  "Wood & lumber debris",
  "Yard waste & brush",
  "Garage & basement cleanouts",
  "Construction leftovers",
  "General household junk",
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "furniture-mattresses",
    number: "01",
    title: "Furniture & Mattresses",
    subtitle: "Bulky indoor haul-aways",
    description:
      "Couches, sectionals, dressers, bed frames, tables, and worn-out mattresses hauled straight from your living room or upstairs bedroom without scratching a wall.",
    examples: ["Sofas & sectionals", "Mattresses & box springs", "Dressers, desks & chairs", "Patio & dining sets"],
    accent: "lime",
    image: SITE_IMAGES.furnitureMattresses,
  },
  {
    id: "appliances-tires",
    number: "02",
    title: "Appliances & Old Tires",
    subtitle: "Heavy gear off your hands",
    description:
      "Dead fridges, washers, dryers, stoves, and stacks of old car or truck tires taking up room by the shed. We handle the heavy lifting and load it cleanly.",
    examples: ["Refrigerators & freezers", "Washers & dryers", "Stoves, microwaves & metal", "Car, SUV & truck tires"],
    accent: "pink",
    image: SITE_IMAGES.appliancesTires,
  },
  {
    id: "wood-yard-debris",
    number: "03",
    title: "Wood, Lumber & Yard Waste",
    subtitle: "Outdoor piles cleared fast",
    description:
      "Peeling fence planks, leftover remodel lumber, broken pallets, cut tree limbs, and seasonal brush piles chomped right off your driveway or yard.",
    examples: ["Wood & lumber debris", "Old fencing & decking", "Yard waste & brush", "Construction leftovers"],
    accent: "lime",
    image: SITE_IMAGES.woodYardDebris,
  },
  {
    id: "cleanouts",
    number: "04",
    title: "Garage, Basement & Household Cleanouts",
    subtitle: "Full-space resets",
    description:
      "Years of stacked boxes, broken bikes, holiday clutter, and general household junk cleared in one sweep so you can actually park in your garage again.",
    examples: ["Garage cleanouts", "Basement & attic sweeps", "Storage & shed clear-outs", "General household junk"],
    accent: "pink",
    image: SITE_IMAGES.garageCleanout,
  },
];

export const QUOTE_FACTORS: QuoteFactor[] = [
  {
    id: "volume",
    number: "01",
    title: "Volume in the Truck",
    description:
      "Jobs start at $89 for a small single-item or light load and scale simply by how much space your items take up.",
  },
  {
    id: "type",
    number: "02",
    title: "Type of Material",
    description:
      "Everyday furniture and household clutter differ from extra-dense loads like tires, appliances, or heavy lumber.",
  },
  {
    id: "access",
    number: "03",
    title: "Access & Lifting",
    description:
      "Driveway pickups are the quickest. Tight basements, multi-flight stairs, or long mountain-lot carries are factored into your upfront quote.",
  },
];
