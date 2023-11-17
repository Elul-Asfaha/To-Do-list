import { IoAddSharp } from "react-icons/io5";
import Task from "./Task";
import { Link } from "react-router-dom";
type DisplayTasksType = {
    tasks: {
        title: string;
        completed: boolean;
        description: string;
        urgency: boolean;
        category: string;
    }[];
    removeHandler: (id: number) => void;
    completedHandler: (id: number) => void;
};

const DisplayTasks = ({
    tasks,
    removeHandler,
    completedHandler,
}: DisplayTasksType) => {
    // renders the list
    const displayList = tasks.map((item, index) => (
        <Task
            key={item.title}
            removeHandler={removeHandler}
            completedHandler={completedHandler}
            id={index}
            data={item}
        />
    ));
    return (
        <div className='shadow-md  rounded-md px-5 md:px-0 py-5 min-h-[600px] min-w-[380px] w-full bg-[#10123A] text-white max-w-[600px] flex flex-col gap-5'>
            <Link
                to='/CreateTasks'
                className='flex items-center gap-2 w-full max-w-fit text-white hover:bg-[#401e8a] bg-[#401e80] md:ms-5 px-3 py-1 rounded-md shadow-md'
            >
                <span className='text-3xl'>
                    <IoAddSharp />
                </span>
                <p className='w-full max-w-fit text-xl'>Add Tasks</p>
            </Link>
            <div className='flex flex-col gap-5 w-full md:px-5'>
                <p className='text-3xl md:text-4xl px-5 bg-gray-600 shadow-sm py-1 md:py-3 rounded-sm font-Agbalumo'>
                    Tasks
                </p>
                {displayList}
            </div>
        </div>
    );
};

export default DisplayTasks;
