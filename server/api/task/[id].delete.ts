import { TASKS } from '~/server/constants/tasks';
import {GET_INDEX_BY_ID} from '~/server/utils';
import { DEFAULT_FORMATTER } from '~/server/formatters';

export default defineEventHandler((event) =>  {
    const id = Number(getRouterParam(event, 'id'));
    const deletingTaskIndex = GET_INDEX_BY_ID(id, TASKS);
    const deletingTaskItem = TASKS[deletingTaskIndex];

    TASKS.splice(deletingTaskIndex, 1);

	return new Promise(resolve => setTimeout(resolve, 100, DEFAULT_FORMATTER({data: deletingTaskItem as any})));
});
