import { FormField } from "./types";

export const fields: FormField[] = [
  { name: "username", label: "Username", type: "text", required: true },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    autocomplete: "current-password",
  },
];
