import type { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
  type:
    | "text"
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "email"
    | "datetime-local"
    | "url"
    | "time"
    | "tel"
    | "submit"
    | "search";
  placeholder: string;
}

export const Input = ({ children, placeholder, type }): InputProps => {
  <>
    <input type="" name="" id="" />
  </>;
};
