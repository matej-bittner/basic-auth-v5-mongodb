import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
interface CardWrapperProps {
  children: React.ReactNode;
  linkHref: string;
  linkTitle: string;
  headerTitle: string;
}

export const CardWrapper = ({
  children,
  linkTitle,
  linkHref,
  headerTitle,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="text-center space-y-3">
        <CardTitle>Applikace</CardTitle>
        <CardDescription>{headerTitle}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Link
          className="text-xs font-semibold hover:underline text-muted-foreground text-center w-full"
          href={linkHref}
        >
          {linkTitle}
        </Link>
      </CardFooter>
    </Card>
  );
};
