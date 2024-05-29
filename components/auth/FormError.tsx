import React from "react";
import { MdErrorOutline } from "react-icons/md";
interface FormErrorProps {
  message?: string;
}
const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="w-full bg-destructive/15 rounded-md flex items-center gap-4 p-2 text-destructive">
      <MdErrorOutline className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
