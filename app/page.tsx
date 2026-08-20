import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className="bg-blue-100 shadow-2xl shadow-blue-400 rounded-3xl text-blue-800 text-center">
          <h2 className="p-3 m-3 mt-5 text-3xl bg-blue-100 border-black border rounded-4xl">do you have an acount?</h2>
          <br />
          <h1 className="mb-10"><Link className="p-2 text-4xl bg-cyan-400 rounded-2xl shadow-xl hover:text-blue-600 hover:bg-cyan-300" href={"/login"}>login</Link></h1>
          <h1 className="mb-10"><Link className="p-2 text-4xl bg-cyan-400 rounded-2xl shadow-xl hover:text-blue-600 hover:bg-cyan-300" href={"/register"}>register</Link></h1>
        </div>
      </div>
    </>
  )
}
