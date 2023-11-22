import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
type TasksType = {
    title: string;
    completed: boolean;
    description: string;
    urgency: boolean;
    category: string;
}[];
import { useLocalStorage } from "../Hooks/useLocalStorage";
export const useTasksState = () => {
    const localStorageList = useLocalStorage();

    const [tasks, setTasks] = useState<TasksType>(localStorageList);
    const [newTask, setNewTask] = useState({
        title: "",
        completed: false,
        description: "",
        urgency: false,
        category: "Work",
    });
    // this is a function that removes a task based on index of the task
    const handleRemove = (id: number) => {
        const newArray = tasks.filter((items, index) => index !== id && items);
        setTasks(newArray);
    };
    // this is a function that changes the value of the task to completed or not completed
    const handleCompleted = (id: number) => {
        const updatedData = tasks.map((obj, index) => {
            if (index === id) return { ...obj, completed: !obj.completed };
            return obj;
        });
        setTasks(updatedData);
    };

    //this handles the new task
    const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };
    const handleNewTaskTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };
    //this handles the new task checkbox
    const handleNewTaskCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setNewTask({ ...newTask, [name]: checked });
    };
    const handleNewTaskSelectOption = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };
    // this submits new task and redirect to the display tasks route
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask({
            title: "",
            completed: false,
            description: "",
            urgency: false,
            category: "Work",
        });
        navigate("/");
    };
    return {
        tasks,
        handleRemove,
        handleCompleted,
        handleNewTask,
        handleSubmit,
        handleNewTaskSelectOption,
        handleNewTaskTextarea,
        handleNewTaskCheckbox,
        newTask,
    };
};
