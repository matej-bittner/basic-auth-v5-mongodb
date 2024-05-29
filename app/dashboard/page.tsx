import React from "react";
import { auth } from "@/auth";
import { SignOut } from "@/components/auth/LogOutButton";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}

      <SignOut />
    </div>
  );
};

export default DashboardPage;
