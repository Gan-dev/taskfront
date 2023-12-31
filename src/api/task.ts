import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const API = 'https://irontask.fly.dev/api'

export const createTaskRequest = (task: CreateTask) => {
    return fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getTaskRequest = () => fetch(`${API}/tasks`)

export const deleteTaskRequest = (id: string) => fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
})

export const updateTaskRequest = (id: string, task: UpdateTask) => {
    return fetch(`${API}/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        }
    })
}