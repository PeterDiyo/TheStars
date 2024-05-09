import { nanoid } from "nanoid";

import ho from "./assets/ho.jpg";
import log from "./assets/log.jpg";
import b from "./assets/b.jpg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#services", text: "services" },
];

export const featureData = [
  {
    id: nanoid(),
    imageUrl: ho,
    description: "Hotel",
  },
  {
    id: nanoid(),
    imageUrl: log,
    description: "Logistics",
  },
  {
    id: nanoid(),
    imageUrl: b,
    description: "General Trading",
  },
];
