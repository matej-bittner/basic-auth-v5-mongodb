import React from "react";
import { GrValidate } from "react-icons/gr";
interface FormSuccessProps {
  message?: string;
}
const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="w-full bg-emerald-500/15 rounded-md flex items-center gap-4 p-2 text-emerald-500">
      <GrValidate className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
