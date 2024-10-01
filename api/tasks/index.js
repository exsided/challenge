import {STATUS} from '@/constants/statuses.ts';
import {fetchTasksResponseParser, createTaskResponseParser} from '~/api/tasks/parsers'

export default {
    async fetchTasks() {
        const {data, error} = await useFetch('/api/tasks');
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('fetchTasks ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData) {
            return {data: fetchTasksResponseParser(unrefData), error: null};
        }
    },
    async createTask(payload) {
        const {data, error} = await useFetch(`/api/task`, {
            method: 'POST',
            body: payload,
        });
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('updateTask ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData?.status === STATUS.success) {
            return {data: createTaskResponseParser(unrefData), error: null};
        }
    },
    async updateTask(id, payload) {
        const {data, error} = await useFetch(`/api/task/${id}`, {
            method: 'PUT',
            body: payload,
        });
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('updateTask ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData?.status === STATUS.success) {
            return {data: unrefData, error: null};
        }
    },
    async removeTask(id) {
        const {data, error} = await useFetch(`/api/task/${id}`, {
            method: 'DELETE',
        });
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('removeTask ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData?.status === STATUS.success) {
            return {data: unrefData, error: null};
        }
    }
};
