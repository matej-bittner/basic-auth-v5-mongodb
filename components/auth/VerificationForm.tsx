"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "@/components/auth/CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import newVerification from "@/actions/new-verification";
import FormSuccess from "@/components/auth/FormSucces";
import FormError from "@/components/auth/FormError";
const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Něco se nepovedlo.");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Něco se nepovedlo");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      linkHref="/auth/login"
      linkTitle="Zpět na přihlášení."
      headerTitle="Obnovení hesla"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default VerificationForm;
