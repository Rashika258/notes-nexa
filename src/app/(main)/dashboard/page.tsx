import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import db from "@/lib/supabase/db";
import DashboardSetup from '@'

const DashboardPage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("data", user);

  if (!user) return;
  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.workspaceOwner, user.id),
  });

  return (
  <div className="bg-background h-screen w-screen flex justify-center items-center">
    <DashboardSetup user ={user} subscription ={subscription} />

  </div>);
};

export default DashboardPage;
