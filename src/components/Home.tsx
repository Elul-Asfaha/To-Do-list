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

    // renders the list
    const displayList = tasks.map((item, index) => (
        <Task
            key={item.title}
            removeHandler={handleRemove}
            completedHandler={handleCompleted}
            id={index}
            data={item}
        />
    ));
    return (
        <div className='flex flex-col gap-5 md:gap-10 items-center py-10 px-3'>
            <p className='text-center text-3xl md:text-5xl font-bold'>
                To Do List
            </p>
            <button className='flex items-center gap-2 w-full max-w-fit self-end text-white bg-[#20123A] px-3 py-1 rounded-md shadow-md'>
                <span className='text-3xl'>
                    <IoAddSharp />
                </span>
                <p className='w-full max-w-fit text-xl'>Add Tasks</p>
            </button>
            <div className='flex flex-col gap-5 min-w-[320px] w-full px-3 md:px-5 max-w-[600px]'>
                <p className='text-3xl md:text-5xl font-semibold px-5'>Tasks</p>
                {displayList}
            </div>
        </div>
    );
};

export default Home;
