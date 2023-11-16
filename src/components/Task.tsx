import { IoTrashOutline } from "react-icons/io5";

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
};
const Task = ({ data, id, removeHandler }: taskType) => {
    return (
        <div className='flex justify-between items-center gap-5'>
            <div className='font-semiboldbold text-3xl'>
                {id + 1 + ". " + data.title}
            </div>
            <button onClick={() => removeHandler(id)}>
                <span className='text-3xl'>
                    <IoTrashOutline />
                </span>
            </button>
        </div>
    );
};

export default Task;
