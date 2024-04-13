import Link from "next/link";

export default function Navbar() {
    return (
    <nav>
        <Link href={'/'}>NEXT CRUD APP</Link>
        <Link href={'/addTask'}>Add Task</Link>
    </nav>    
    
    )
}