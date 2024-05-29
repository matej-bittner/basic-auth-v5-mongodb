"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignOut() {
  const onClick = () => {
    signOut();
  };
  return <Button onClick={onClick}>Sign Out</Button>;
}
