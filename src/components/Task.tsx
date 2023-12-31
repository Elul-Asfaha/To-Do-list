import { IoTrashOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import Description from "./Description";

type taskType = {
    data: {
        title: string;
        completed: boolean;
        description: string;
        urgency: boolean;
        category: string;
    };
    id: number;
    removeHandler: (id: number) => void;
    completedHandler: (id: number) => void;
};
const Task = ({ data, id, removeHandler, completedHandler }: taskType) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='flex flex-col hover:brightness-95 cursor-pointer even:bg-[#401e80] odd:bg-[#101252] gap-2 px-3 py-3 md:py-5 rounded-md'>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex items-center gap-3'>
                        <input
                            type='checkbox'
                            className='h-[18px] w-[18px] accent-green-600'
                            onChange={() => completedHandler(id)}
                            checked={data.completed}
                        />
                        <p
                            className={`${
                                data.completed ? "line-through	" : ""
                            }font-semiboldbold text-2xl`}
                        >
                            <span className=''>{id + 1 + "."}</span>{" "}
                            {data.title}
                        </p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <p>
                            <span className='font-semibold'>Category: </span>
                            {data.category}
                        </p>
                        {data.urgency ? (
                            <div className='flex items-center gap-1 text-lg'>
                                <div className='text-2xl text-red-700'>
                                    <GoDotFill />
                                </div>
                                <p className='lowercase'>Urgent</p>
                            </div>
                        ) : null}
                    </div>
                </div>
                <button className='h-fit' onClick={() => removeHandler(id)}>
                    <span className='text-2xl'>
                        <IoTrashOutline />
                    </span>
                </button>
            </div>
            <button
                className='w-fit underline self-end md:me-5'
                onClick={() => setToggle(!toggle)}
            >
                Show details
            </button>
            {toggle ? <Description description={data.description} /> : null}
        </div>
    );
};

export default Task;
