export interface ServiceAreaAnchor {
  id: string;
  name: string;
  regionLabel: string;
  accent: "lime" | "pink";
  summary: string;
  highlights: string[];
}

export const ANCHOR_AREAS: ServiceAreaAnchor[] = [
  {
    id: "aspen",
    name: "Aspen",
    regionLabel: "Roaring Fork High Country",
    accent: "lime",
    summary:
      "Fast residential, condo, and remodel cleanouts up the valley — tight mountain driveways and steep streets are no problem for our crew.",
    highlights: ["Aspen core & Red Mountain", "Snowmass Village & Woody Creek", "Basalt & El Jebel"],
  },
  {
    id: "glenwood-springs",
    name: "Glenwood Springs",
    regionLabel: "Roaring Fork & Colorado River Hub",
    accent: "pink",
    summary:
      "Same-day availability when routes line up across Glenwood Springs, Carbondale, and down the I-70 corridor for homes, garages, and yards.",
    highlights: ["Glenwood Springs & West Glenwood", "Carbondale & Missouri Heights", "New Castle, Silt & Rifle"],
  },
];

export const EXTENDED_CORRIDORS: string[] = [
  "Aspen",
  "Snowmass",
  "Basalt",
  "Carbondale",
  "Glenwood Springs",
  "New Castle",
  "Silt",
  "Rifle",
  "Eagle & Vail Valley",
  "Grand Junction",
  "Steamboat Springs",
  "& Beyond across Western & Northern Colorado",
];
