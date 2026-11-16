export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  town: string;
  accent: "lime" | "pink";
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    quote: "Called in the morning about an old sectional and two mattresses, and they had it all loaded up before dinner.",
    author: "Hannah",
    town: "Glenwood Springs, CO",
    accent: "lime",
  },
  {
    id: "t-2",
    quote: "Super friendly crew and straightforward pricing. Our packed garage finally fits a car again.",
    author: "Derek",
    town: "Carbondale, CO",
    accent: "pink",
  },
  {
    id: "t-3",
    quote: "Hauled away a huge pile of peeling deck lumber and tree branches without leaving a single splinter on the driveway.",
    author: "Maya",
    town: "Aspen, CO",
    accent: "lime",
  },
  {
    id: "t-4",
    quote: "Texted a photo of a dead fridge and four old tires, got a quick quote right back, and they handled the heavy lifting.",
    author: "Trevor",
    town: "Basalt, CO",
    accent: "pink",
  },
  {
    id: "t-5",
    quote: "No hassle at all. Friendly guys, fast work, and fair rates from the first phone call to the final sweep.",
    author: "Claire",
    town: "Rifle, CO",
    accent: "lime",
  },
];
