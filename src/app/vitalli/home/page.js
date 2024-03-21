"use client";

import HomeRemind from "../../features/home/components/HomeRemind";
import HomeDates from "../../features/home/components/HomeDates";
import Profile from "../../features/home/components/Profile";
import NewsAside from "@/app/features/home/components/NewsArcticles";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "../../loading";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }
  // console.log(session, "session user");

  return (
    <div className="h-screen ">
      <div className="mt-20 md:grid md:grid-cols-12">
        <aside className="md:col-span-3">
          <Profile />
          <HomeRemind />
        </aside>
        <main className="md:grid md:col-span-6">
          <HomeDates />
        </main>
        <aside className="md:grid md:col-span-3">
          <NewsAside/>
        </aside>
      </div>
    </div>
  );
}
