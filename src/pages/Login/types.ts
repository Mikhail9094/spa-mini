export interface FormField {
  name: string;
  label: string;
  type: "text" | "password" | "email" | "number" | "date";
  required: boolean;
  autocomplete?:
    | "off"
    | "on"
    | "username"
    | "current-password"
    | "new-password"
    | "email"
    | "tel"
    | "name";
}
