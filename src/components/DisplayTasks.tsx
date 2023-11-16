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
        <>
            <Link
                to='/CreateTasks'
                className='flex items-center gap-2 w-full max-w-fit text-white bg-[#20123A] px-3 py-1 rounded-md shadow-md'
            >
                <span className='text-3xl'>
                    <IoAddSharp />
                </span>
                <p className='w-full max-w-fit text-xl'>Add Tasks</p>
            </Link>
            <div className='flex flex-col gap-5 min-w-[320px] w-full px-3 md:px-5 max-w-[600px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold px-5'>
                    Tasks
                </p>
                {displayList}
            </div>
        </>
    );
};

export default DisplayTasks;
