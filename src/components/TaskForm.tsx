import { ChangeEvent, FormEvent, useState } from "react"
import { useTasks } from "../contexts/useTasks";

const TaskForm = () => {

    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false
    });

    const { createTask } = useTasks()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (task.title && task.description) {
            createTask(task)
        } else {
            alert("Debes Rellenar los campos")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" type="text" name="title" placeholder="Write a title" onChange={handleChange} />

                <textarea className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" name="description" rows={3} placeholder="Write a description" onChange={handleChange} />

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input className="h-5 w-5 text-indigo-500" type="checkbox" onChange={() => setTask({ ...task, done: !task.done })} />
                    <span>Done</span>
                </label>

                <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>

            </form>
        </div >

    )
}

export default TaskForm