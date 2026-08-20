"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function dashboard() {
  const router = useRouter();

  const checkauth = async () => {
    const res = await fetch("/api/auth/me");

    if (!res.ok) {
      router.push("/login");
      return;
    }

    const data = await res.json();

    console.log("logged in user:", data.user);
  }


  useEffect(() => {
    checkauth();
  }, [router]);


  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="bg-blue-100 shadow-2xl shadow-blue-400 rounded-3xl text-blue-800 text-center">
          <h2 className="p-3 m-3 mt-5 text-3xl bg-blue-100 border-black border rounded-4xl">dashboard</h2>
          <h1 className='text-4xl text-cyan-600 p-3 m-4'>manage and delete acounts</h1>
          <h1 className="mb-10"><Link className="p-2 text-4xl bg-cyan-400 rounded-2xl shadow-xl hover:text-blue-600 hover:bg-cyan-300" href={"/home"}>home</Link></h1>
        </div>
      </div>



  )
}

export default dashboard