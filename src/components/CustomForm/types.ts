import { FormField } from "../../pages/Login/types";

export interface FormProps {
  title: string;
  fields: FormField[];
  onSubmit: (data: { [key: string]: string }) => void;
  className?: string;
  errorMessage: string;
  isLoading?: boolean;
}

export interface FormData {
  [key: string]: string;
}
