import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="flex justify-between items-center
    bg-slate-300 px-8 py-3">

        <Link classname="text-white font-bold" href={'/'}>NEXT CRUD APP</Link>

        <Link classname="text-white p-2" href={'/addTask'}>Add Task</Link>
    </nav>    
    
    )
}