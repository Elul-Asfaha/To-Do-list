import { useState } from "react";
import DisplayTasks from "./DisplayTasks";
import { Route, Routes } from "react-router-dom";
type TasksType = {
    title: string;
    completed: boolean;
    description: string;
    urgency: boolean;
    category: string;
}[];
const Home = () => {
    const [tasks, setTasks] = useState<TasksType>([
        {
            title: "write diary",
            completed: false,
            description: "write about what happened today in your diary",
            urgency: false,
            category: "personal",
        },
        {
            title: "Cook food",
            completed: false,
            description: "write about what happened today in your diary",
            urgency: false,
            category: "personal",
        },
        {
            title: "Clean House",
            completed: true,
            description: "write about what happened today in your diary",
            urgency: true,
            category: "personal",
        },
    ]);

    // this is a function that removes a task based on index of the task
    const handleRemove = (id: number) => {
        const newArray = tasks.filter((items, index) => index !== id);
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

    return (
        <div className='flex flex-col gap-5 md:gap-10 items-center py-10 px-3'>
            <p className='text-center text-3xl md:text-5xl font-bold'>
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
            </Routes>
        </div>
    );
};

export default Home;
