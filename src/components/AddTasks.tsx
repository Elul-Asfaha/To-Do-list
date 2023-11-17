import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

type AddTaskType = {
    newTask: {
        title: string;
        description: string;
        urgency: boolean;
        category: string;
    };
    newTaskTextareaHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    newTaskHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    newTaskCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    newTaskSelectOptionHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
    submitHandler: (e: FormEvent) => void;
};

const AddTasks = ({
    newTask,
    newTaskHandler,
    submitHandler,
    newTaskCheckboxHandler,
    newTaskTextareaHandler,
    newTaskSelectOptionHandler,
}: AddTaskType) => {
    const categories = ["Work", "Personal", "Hobby", "Social"];
    return (
        <div className='flex flex-col bg-[#10123A] text-white gap-5 px-5 w-full md:px-5 max-w-[600px] py-10 rounded-md'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold px-5'>
                Create New Task
            </p>
            <Link
                to='/'
                className='flex items-center gap-2 w-full max-w-fit text-white hover:bg-[#401e8a] bg-[#401e80] px-3 py-1 rounded-md shadow-md'
            >
                Back
            </Link>
            <form
                onSubmit={(e) => submitHandler(e)}
                className='flex flex-col items-center gap-5 text-black'
            >
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='title' className='font-semibold text-white'>
                        Title:
                    </label>
                    <input
                        type='text'
                        name='title'
                        onChange={(e) => newTaskHandler(e)}
                        required
                        value={newTask.title}
                        className='border border-black px-3 py-2'
                    />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label
                        htmlFor='description'
                        className='font-semibold text-white'
                    >
                        Description:
                    </label>
                    <textarea
                        name='description'
                        onChange={newTaskTextareaHandler}
                        required
                        value={newTask.description}
                        className='border border-black resize-none min-h-[230px] px-3 py-2'
                    />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label
                        htmlFor='category'
                        className='font-semibold text-white'
                    >
                        Category:
                    </label>
                    <select
                        name='category'
                        className='border border-black p-1'
                        onChange={(e) => {
                            newTaskSelectOptionHandler(e);
                        }}
                    >
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex items-center gap-1 w-full'>
                    <label
                        htmlFor='urgency'
                        className='font-semibold text-white'
                    >
                        Urgent:
                    </label>
                    <input
                        name='urgency'
                        type='checkbox'
                        onChange={(e) => newTaskCheckboxHandler(e)}
                        checked={newTask.urgency}
                        className='w-[15px] h-[15px]'
                    />
                </div>

                <button
                    type='submit'
                    className='flex items-center gap-2 w-full max-w-fit text-white hover:bg-[#401e8a] bg-[#401e80] px-5 py-2 rounded-md shadow-md'
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default AddTasks;
