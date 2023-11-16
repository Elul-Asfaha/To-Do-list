import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import Task from "./Task";
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
            completed: false,
            description: "write about what happened today in your diary",
            urgency: false,
            category: "personal",
        },
    ]);

    // this is a function that removes a task based on index of the tasl
    const handleRemove = (id: number) => {
        const newArray = tasks.filter((items, index) => index !== id);
        setTasks(newArray);
    };

    return (
        <div className='flex flex-col gap-5 py-10 px-5'>
            <p className='text-center text-5xl font-bold'>To Do List</p>
            <button className='flex items-center gap-5 w-full max-w-fit self-end text-white bg-[#20123A] px-3 py-1 rounded-md shadow-md'>
                <span className='text-3xl'>
                    <IoAddSharp />
                </span>
                <p className='w-full max-w-fit text-xl'>Add Tasks</p>
            </button>
            <div>
                {tasks.map((item, index) => (
                    <Task
                        key={item.title}
                        removeHandler={handleRemove}
                        id={index}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
