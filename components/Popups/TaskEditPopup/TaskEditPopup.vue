<template>
    <div class="task-edit-popup">
        <TaskForm
            :initial-values="formInitialFields"
            :handler="handler"
            submit-btn-text="Edit Task"
        />
    </div>
</template>

<script lang="ts" setup>
import {useTasksStore} from "~/store/tasks";
import {usePopupsStore} from "~/store/popups";

const emit = defineEmits<{
  close: []
}>();

const tasksStore = useTasksStore();
const popupsStore = usePopupsStore();
const formInitialFields = { title: popupsStore.data.title };

const handler = async (fields: {title: string}) => {
    const editingTaskId = popupsStore.data.id;

    if (editingTaskId === undefined || editingTaskId === null) {
        emit('close');
        return;
    }

    await tasksStore.updateTask(editingTaskId, fields);
    emit('close');
};
</script>

<style lang="scss" src="@/components/Popups/TaskEditPopup/styles.scss"/>
