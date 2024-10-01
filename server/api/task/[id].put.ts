import {TASKS} from '~/server/constants/tasks';
import {GET_INDEX_BY_ID} from '~/server/utils';
import {DEFAULT_FORMATTER} from '~/server/formatters';

export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'));
    const body = await readBody(event);
    const updatingTaskIndex = GET_INDEX_BY_ID(id, TASKS);

    TASKS[updatingTaskIndex] = {...TASKS[updatingTaskIndex], ...body, id};

    return new Promise(resolve => setTimeout(resolve, 100, DEFAULT_FORMATTER({data: TASKS[updatingTaskIndex] as any})));
});
