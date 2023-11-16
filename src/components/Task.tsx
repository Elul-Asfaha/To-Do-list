import { IoTrashOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

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
    return (
        <div className='flex justify-between gap-5 px-2 md:px-5 py-5 shadow-sm'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <input
                        type='checkbox'
                        onChange={() => completedHandler(id)}
                        checked={data.completed}
                    />
                    <p
                        className={`${
                            data.completed ? "line-through	" : ""
                        }font-semiboldbold text-2xl`}
                    >
                        <span className=''>{id + 1 + "."}</span> {data.title}
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
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
    );
};

export default Task;
