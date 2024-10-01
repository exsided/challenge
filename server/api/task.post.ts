import {EMPTY_TASK, TASKS} from '~/server/constants/tasks';
import {GET_LAST_ID} from '~/server/utils';
import {DEFAULT_FORMATTER} from '~/server/formatters';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const newTaskId = GET_LAST_ID(TASKS) + 1;

    const newTask = Object.assign(EMPTY_TASK, body, { id: newTaskId });

    TASKS.push(newTask);

    return new Promise(resolve => setTimeout(resolve, 100, DEFAULT_FORMATTER({data: newTask as any})));
});
