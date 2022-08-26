import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-800 h-max">
    <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
    </div>
      
    </div>
  );
}
export default App;
