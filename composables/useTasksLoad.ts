import {useTasksStore} from '@/store/tasks'
import {useMainStore} from '@/store/main'

export const useTasksLoaded = async () => {
    const instance = getCurrentInstance() as { uid: number};
    const tasksStore = useTasksStore();
    const mainStore = useMainStore();

    await tasksStore.fetchTasks();

    watchEffect(() => mainStore[unref(tasksStore.tasksIsFetching) ? 'enableLoading' : 'disableLoading'](instance.uid));
};
