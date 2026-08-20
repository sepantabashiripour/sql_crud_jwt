import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className="bg-blue-100 shadow-2xl shadow-blue-400 rounded-3xl text-blue-800 text-center">
            <h1 className="text-5xl text-indigo-600 p-4 m-4">welcome</h1>
            <h1 className="mb-10"><Link className="p-2 text-4xl bg-cyan-400 rounded-2xl shadow-xl hover:text-blue-600 hover:bg-cyan-300" href={"/dashboard"}>dashboard</Link></h1>
            <h1 className="mb-10"><Link className="p-2 text-4xl bg-cyan-400 rounded-2xl shadow-xl hover:text-blue-600 hover:bg-cyan-300" href={"/logout"}>logout</Link></h1>
        </div>
      </div>
    </>
  )
}
