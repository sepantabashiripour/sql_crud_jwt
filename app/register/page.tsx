"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function register() {

  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [name,setname] = useState("")

  const router = useRouter();

  const registeruser = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("register Successful");
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
   };
  return (
      <div className='flex items-center justify-center h-screen'>
        <div className=' bg-blue-100 text-gray-900 shadow-2xl shadow-blue-400 rounded-3xl text-center'>
          <h1 className='text-cyan-600 text-4xl m-3'>register</h1>

          
          <input type="text" placeholder="enter your name" className='text-gray-950 rounded-md m-5 p-5 border-double border-3 shadow-blue-900 shadow-md border-cyan-300 hover:border-dotted hover:border-3 hover:text-blue-800 hover:border-blue-700 hover:shadow-cyan-400 hover:shadow-xs' value={name} onChange={(e) => setname(e.target.value)}/>
          
          <br />

          <input type="password" placeholder="enter your password" value={password} onChange={(e) => setpassword(e.target.value)} className='text-gray-950 rounded-md m-5 p-5 border-double border-3 shadow-blue-900 shadow-md border-cyan-300 hover:border-dotted hover:border-3 hover:text-blue-800 hover:border-blue-700 hover:shadow-cyan-400 hover:shadow-xs'/>

          <br />
          
          <input type="email" placeholder="enter your email" className='text-gray-950 rounded-md m-5 p-5 border-double border-3 shadow-blue-900 shadow-md border-cyan-300 hover:border-dotted hover:border-3 hover:text-blue-800 hover:border-blue-700 hover:shadow-cyan-400 hover:shadow-xs' value={email} onChange={(e) => setmail(e.target.value)}/>


          <h1 className="mb-7 mt-5">
            <Link className="p-2 text-4xl border rounded-2xl shadow-xl text-cyan-600 hover:text-cyan-700 hover:bg-blue-200 m-2" href={"/"}>back</Link>
            <button onClick={registeruser} className='p-2 text-4xl border rounded-2xl shadow-xl text-cyan-700 bg-blue-200 hover:text-cyan-900 hover:bg-green-100 m-2'>check</button>
          </h1>
        </div>
      </div>
  )
}

export default register