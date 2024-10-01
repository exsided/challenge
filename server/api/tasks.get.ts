import { TASKS } from '~/server/constants/tasks';
import { ITEMS_FORMATTER } from '~/server/formatters';

export default defineEventHandler(() =>  {
	return new Promise(resolve => setTimeout(resolve, 100, ITEMS_FORMATTER({items: TASKS as any})));
});
