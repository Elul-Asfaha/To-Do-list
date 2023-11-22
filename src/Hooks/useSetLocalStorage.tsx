import { useEffect } from "react";
type TasksType = {
    title: string;
    completed: boolean;
    description: string;
    urgency: boolean;
    category: string;
}[];
export const useSetLocalStorage = (tasks: TasksType) => {
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
};

export default useSetLocalStorage;
