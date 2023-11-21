import { Metadata } from "next";

export function title(title: string): Metadata {
  return {
    title: `${title} — 2023 CS Class Profile`,
    icons: ["/images/favicon.ico"],
  };
}
