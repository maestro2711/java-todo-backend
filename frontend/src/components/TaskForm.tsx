import {Task} from "../App.tsx";
import {FormEvent, useState} from "react";


interface TaskFormProps{
    addTask:(task:Task)=>void;
}



export default function TaskForm(props:TaskFormProps) {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<'OPEN' | 'IN_PROGRESS' | 'DONE'>('OPEN')

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()

        const newTask: Task = {
            id: "0",
            description,
            status,
        }

        props.addTask(newTask);
        setDescription("")
        setStatus("OPEN")
    }

    return(
        <form onSubmit={handleSubmit}>

            <input
                type={"text"}
                value={description}
                onChange={(event)=>setDescription(event.target.value)}/>
            <select value={status} onChange={(event)=>setStatus(event.target.value as 'OPEN'|'IN_PROGRESS'|'DONE')} >
                <option value={"OPEN"}>OPEN</option>
                <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
                <option value={"DONE"}>DONE</option>

            </select>
            <button type={"submit"}>Add</button>
        </form>
    )

}
