export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "what-we-take",
    question: "What kind of junk do you take?",
    answer:
      "We haul furniture, mattresses, appliances, old tires, wood and lumber debris, yard waste and brush, construction leftovers, garage and basement cleanouts, and general household junk. Not sure about a weird item? Text or call (970) 987-7211 for a quick answer.",
  },
  {
    id: "how-fast",
    question: "How fast can you come out?",
    answer:
      "Same-day service is available whenever our truck schedule allows! Give us a call or text early in the day and we will let you know our next open window in your town.",
  },
  {
    id: "pricing",
    question: "How is pricing decided?",
    answer:
      "Junk removal starts at $89. Final quotes depend on three simple things: how much space your items take up in the truck (volume), the type of material, and how easy it is to reach and load. Text or call for a quick quote with zero surprises.",
  },
  {
    id: "cleanouts",
    question: "Do you do full garage, basement, or yard cleanouts?",
    answer:
      "Yes! Whether it is a single worn-out couch or an entire packed garage, basement, or backyard brush pile, we do all the lifting, carrying, loading, and sweep-up.",
  },
  {
    id: "where-you-work",
    question: "Where do you work?",
    answer:
      "We serve Western and Northern Colorado — from Aspen to Glenwood Springs & beyond, including Carbondale, Basalt, Snowmass, Rifle, and surrounding mountain communities.",
  },
];
