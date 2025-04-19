import fr from "./fr";
import en from "./en";

export const messages = {
  fr,
  en,
};

export type Lang = keyof typeof messages;
