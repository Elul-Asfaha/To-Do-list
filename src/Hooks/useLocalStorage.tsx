export const useLocalStorage = () => {
    const list = localStorage.getItem("tasks");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

export default useLocalStorage;
