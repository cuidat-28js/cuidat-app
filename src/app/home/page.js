"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";
import HomeRemind from "../components/home-components/HomeRemind";
import HomeDates from "../components/home-components/HomeDates";
import Reminder from "../components/Reminder";
import ProfileEmpty from "../components/home-components/Profile";
import CalendarCompon from "../components/Calendar";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import SessionAuthProvider from "../context/SessionAuthProvider";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const { data: session, status } = useSession();
  // console.log(session, status)


  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user?.email} <br />
  //       <button
  //         onClick={() => signOut()}
  //         className="btn btn-danger"
  //       >
  //         Sign out
  //       </button>
  //     </>
  //   );
  // } else {
  //   console.log(session)
  // }
 
  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     redirect("/login");
  //   }
  // });

  return (
    <React.Fragment>
      {/* <SessionAuthProvider session={session}> */}
        <Navbar />
        <div className="mt-20 md:grid md:grid-cols-12">
          <aside className="md:col-span-3">
            <ProfileEmpty />
            <HomeRemind />
          </aside>
          <main className="md:grid md:col-span-6">
            <HomeDates />
          </main>
          <aside className="md:grid md:col-span-3">
            <div>Blog de articulos aqui</div>
          </aside>
        </div>
        <Footer />
      {/* </SessionAuthProvider> */}
    </React.Fragment>
  );
}
