<template>
    <div class="tasks-list">
        <h3 v-if="title" class="tasks-list__title">
            {{ title }}
        </h3>
        <div class="tasks-list__grid">
            <TransitionGroup name="tasks-list-item">
                <Task
                    v-for="task in tasks"
                    :key="task.id"
                    :can-edit="canEdit"
                    v-bind="task"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ITask} from '@/interfaces/Task';

interface IProps {
    canEdit?: boolean
    tasks: ITask[]
    title?: string
};

withDefaults(defineProps<IProps>(), {
    canEdit: false,
    tasks: () => [],
    title: '',
});
</script>

<style lang="scss" src="@/components/TasksList/styles.scss"/>
