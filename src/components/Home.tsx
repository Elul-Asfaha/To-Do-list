import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DisplayTasks from "./DisplayTasks";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddTasks from "./AddTasks";
type TasksType = {
    title: string;
    completed: boolean;
    description: string;
    urgency: boolean;
    category: string;
}[];

const getLocalItems = () => {
    const list = localStorage.getItem("tasks");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};
const Home = () => {
    const [tasks, setTasks] = useState<TasksType>(getLocalItems());
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

    //
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div className='flex flex-col w-full md:px-5 gap-5 md:gap-10 items-center py-10'>
            <p className='text-center text-3xl md:text-5xl font-bold font-Agbalumo'>
                To Do List
            </p>
            <Routes>
                <Route
                    path='/'
                    element={
                        <DisplayTasks
                            tasks={tasks}
                            removeHandler={handleRemove}
                            completedHandler={handleCompleted}
                        />
                    }
                />
                <Route
                    path='/CreateTasks'
                    element={
                        <AddTasks
                            newTask={newTask}
                            submitHandler={handleSubmit}
                            newTaskHandler={handleNewTask}
                            newTaskCheckboxHandler={handleNewTaskCheckbox}
                            newTaskTextareaHandler={handleNewTaskTextarea}
                            newTaskSelectOptionHandler={
                                handleNewTaskSelectOption
                            }
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default Home;
