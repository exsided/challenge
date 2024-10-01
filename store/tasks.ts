import {defineStore} from 'pinia';
import {useStorage} from "@vueuse/core";
import {ITask, TaskProps} from '@/interfaces/Task';
import tasksApi from '@/api/tasks'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = useStorage<ITask[]>('_tasks', []);
    const tasksIsFetching = ref(false);

    const upcomingTasks = computed(() => tasks.value.filter((task) => !task.checked));
    const completedTasks = computed(() => tasks.value.filter((task) => task.checked));

    const fetchTasks = async () => {
        tasksIsFetching.value = true;
        const {data, error} = await tasksApi.fetchTasks();

        tasksIsFetching.value = false;

        if (error) {
            return;
        }

        tasks.value = data;
    };

    const createTask = async (payload) => {
        const {data, error} = await tasksApi.createTask(payload);

        if (error) {
            return;
        }

        _pushTask(data);
    };

    const updateTask = async (id: number, data: TaskProps) => {
        const {error} = await tasksApi.updateTask(id, data);

        if (error) {
            return;
        }

        _replaceTaskData(id, data);
    };

    const removeTask = async (id: number) => {
        const {error} = await tasksApi.removeTask(id);

        if (error) {
            return;
        }

        _removeTask(id);
    };

    const _pushTask = (task: ITask) => {
        tasks.value.push(task);
    };

    const _removeTask = (id: number) => {
        const removingTaskIndex = GET_INDEX_BY_ID(id, unref(tasks));

        tasks.value.splice(removingTaskIndex, 1);
    };

    const _replaceTaskData = (id: number, data: TaskProps) => {
        const index = tasks.value.findIndex(task => task.id === id);

        for (const prop in data) {
            // @ts-ignore
            tasks.value[index][prop] = data[prop];
        }
    };

    return {
        tasks,
        tasksIsFetching,
        upcomingTasks,
        completedTasks,
        fetchTasks,
        createTask,
        updateTask,
        removeTask,
    };
});
