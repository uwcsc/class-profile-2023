const colorNames = [
  "primaryBackground",
  "secondaryBackground",
  "tertiaryBackground",
  "primaryAccent",
  "primaryAccentLight",
  "primaryAccentLighter",
  "primaryAccentDark",
  "primaryAccentDarker",
  "secondaryAccent",
  "secondaryAccentLight",
  "secondaryAccentLighter",
  "primaryHeading",
  "secondaryHeading",
  "link",
  "linkHover",
  "primaryText",
  "cardBackground",
  "label",
] as const;

// This type is needed for smart autocomplete
type ColorName = typeof colorNames[number];

export const Color: { [key in ColorName]: string } = {
  primaryBackground: "var(--primary-background)",
  secondaryBackground: "var(--secondary-background)",
  tertiaryBackground: "var(--tertiary-background)",
  primaryAccent: "var(--primary-accent)",
  primaryAccentLight: "var(--primary-accent-light)",
  primaryAccentLighter: "var(--primary-accent-lighter)",
  primaryAccentDark: "var(--primary-accent-dark)",
  primaryAccentDarker: "var(--primary-accent-darker)",
  secondaryAccent: "var(--secondary-accent)",
  secondaryAccentLight: "var(--secondary-accent-light)",
  secondaryAccentLighter: "var(--secondary-accent-lighter)",
  primaryHeading: "var(--primary-heading)",
  secondaryHeading: "var(--secondary-heading)",
  link: "var(--link)",
  linkHover: "var(--link-hover)",
  primaryText: "var(--primary-text)",
  cardBackground: "var(--card-background)",
  label: "var(--label)",
};
