
"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description) {
            alert("Title and Description are required.")
            return;
        }
        try {
          const res = await fetch('http://localhost:3000/api/tasks', {
            method: "POST",
            headers: {
                "Constent-type": "application/json",
            },
            body: JSON.stringify({title, description}),
           });

           if (res.ok) {
            router.push('/');
           } else {
            throw new Error("Failed to create a task ")
           }
        } catch (error){

        }
    }

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
         placeholder="Task Title"
         />

        <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
         placeholder="Task Description"
         />


         <button type="submit"  className="bg-green-600 font-bold
          text-white py-3 px-6 w-fit">
            Add Task
         </button>
    </form>
    );
}