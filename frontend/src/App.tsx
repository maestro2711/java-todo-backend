
import './App.css'
import {useState} from "react";
import TaskForm from "./components/TaskForm.tsx";
import TaskCard from "./components/TaskCard.tsx";

//definiere den Typ  für eine Aufgabe
export interface Task {
  id: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
}

function App() {
   const [tasks,setTasks]=useState<Task[]>([])

  //funktion zum hinzufügen einer Aufgabe

  function addTask(tasks: Task): void {
    setTasks(prevTasks => [...prevTasks, tasks]);
  }

  //funktion zum Löschen einer Aufgabe

  function deleteTask(id:string):void{
     setTasks(prevTasks=>prevTasks.filter(task =>task.id !==id))
  }

  // funktion zum editieren

  function editTask(id: string, updatedTask: Task): void {
    setTasks(prevTasks =>
        prevTasks.map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        )
    );
  }
  //funktion zum status ändern

  function updateTaskStatus(id: string, status: 'Open' | 'IN_progress' | 'Done'): void {
    // @ts-ignore
    setTasks(prevTasks => prevTasks.map(task =>
            task.id === id ? { ...task, status } : task
        )
    );
  }
  // @ts-ignore
  return (
    <>
      <div>
        <h1>To DO List Board</h1>
        <TaskForm addTask={addTask}/>
        {/*spalte für open*/}
        <div className={"column"}>
          <h2>ToDo</h2>
          {tasks.filter(tasks =>tasks.status=='OPEN').map(tasks =>(
              <TaskCard key={tasks.id} task={tasks} deleteTask={deleteTask} editTask={editTask} updateTaskStatus={updateTaskStatus}/>
          ))}
        </div>
        <div className={"column"}>
          <h2>Doing</h2>
          {tasks.filter(tasks =>tasks.status=='IN_PROGRESS').map(tasks =>(
              <TaskCard key={tasks.id} task={tasks} deleteTask={deleteTask} editTask={editTask}/>
          ))}
        </div>
        <div className={"column"}>
          <h2>Done</h2>
          {tasks.filter(tasks =>tasks.status=='DONE').map(tasks =>(
              <TaskCard key={tasks.id} task={tasks} deleteTask={deleteTask} editTask={editTask} updateTaskStatus={updateTaskStatus}/>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
