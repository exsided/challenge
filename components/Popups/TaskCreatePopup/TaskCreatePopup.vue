<template>
    <div class="task-create-popup">
        <TaskForm
            :initial-values="formInitialFields"
            :handler="handler"
            submit-btn-text="Create Task"
        />
    </div>
</template>

<script lang="ts" setup>
import {useTasksStore} from "~/store/tasks";

const tasksStore = useTasksStore();
const formInitialFields = { title: '' };

const emit = defineEmits<{
  close: []
}>();

const handler = async (fields: {title: string}) => {
    await tasksStore.createTask(fields);
    emit('close');
}
</script>

<style lang="scss" src="@/components/Popups/TaskCreatePopup/styles.scss"/>
