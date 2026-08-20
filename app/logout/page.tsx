"use client";

import { useRouter } from "next/navigation";


function logout() {

    const router = useRouter();

    const logout = async() => {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
        });      
            
        if (res.ok) {
            alert("logout successful");
            router.push("/login");
        }
    }


  return (
      <div className='flex items-center justify-center h-screen'>
        <div className=' bg-blue-100 text-gray-900 shadow-2xl shadow-blue-400 rounded-3xl text-center'>
          <h1 className='text-cyan-600 text-4xl m-3'>sure about logout?</h1>
            <button onClick={logout} className='p-2 text-4xl border rounded-2xl shadow-xl text-cyan-700 bg-blue-200 hover:text-cyan-900 hover:bg-green-100 m-2'>logout</button>
        </div>
      </div>
  )


}

export default logout