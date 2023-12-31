import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { TaskProvider } from "./contexts/TaskContext"

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 md:w-2/5">
        <h1 className="text-3xl fint-bold text-center block my-2">Task app</h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>

    </div>
  )
}

export default App