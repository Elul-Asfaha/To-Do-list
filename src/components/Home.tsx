import DisplayTasks from "./DisplayTasks";
import { Route, Routes } from "react-router-dom";
import AddTasks from "./AddTasks";
import NoPage from "./NoPage";
import { useSetLocalStorage } from "../Hooks/useSetLocalStorage";
import { useTasksState } from "../Hooks/useTasksState";

const Home = () => {
    const {
        tasks,
        handleRemove,
        handleCompleted,
        handleNewTask,
        handleSubmit,
        handleNewTaskSelectOption,
        handleNewTaskTextarea,
        handleNewTaskCheckbox,
        newTask,
    } = useTasksState();

    // sets the tasks to local storage
    useSetLocalStorage(tasks);
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
                <Route path='*' element={<NoPage />} />
            </Routes>
        </div>
    );
};

export default Home;
