//hier wird die einzelne Aufgabe angezeigt und
// dem Benutzer Optionen geben, die Aufgabe zu löschen,
// editieren oder den satus ändern

import {Task} from "../App.tsx";

interface TaskCardProps {
    task: Task;
    deleteTask: (id: string) => void;
    editTask: (id: string) => void;
    updateTaskStatus: (id: string, status: 'OPEN' | 'IN_PROGRESS' | 'DONE') => void;
}

export default function TaskCard({task,deleteTask,editTask,updateTaskStatus}:TaskCardProps):JSX.Element{

    function handleOnchangeStatus(){
        if (task.status=='OPEN'){
            updateTaskStatus(task.id,'IN_PROGRESS');
        } else if (task.status=='IN_PROGRESS'){
            updateTaskStatus(task.id,'DONE');
        } else {
            updateTaskStatus(task.id, 'OPEN')
        }
    }

    return(
        <>
            <div className={"task-card"}>

                <h3>{task.description}</h3>
                <button onClick={handleOnchangeStatus}>
                    status ändern( aktuell:{task.status})
                </button>
                <button onClick={() => deleteTask(task.id)}>delete</button>
                <button onClick={()=>editTask(task.id)}>Edit</button>
            </div>
        </>

    )
}

