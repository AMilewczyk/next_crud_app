import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="flex justify-between items-center
    bg-slate-800 px-8 py-3">

        <Link className="text-white font-bold" href={'/'}>NEXT CRUD APP</Link>

        <Link className="text-black p-2 bg-green-300"  href={'/addTask'}>Add Task</Link>
    </nav>    
    
    )
}