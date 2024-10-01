<template>
    <NuxtLayout name="default">
        <div class="settings-page container">
            <Breadcrumbs :items="breadcrumbs" />
            <PageHeading class="settings-page-heading">
                <template #title>
                    Settings
                </template>
                <template #actions>
                    <UIButton
                        class="settings-page-heading__add-item-btn"
                        @click="onCreateTask"
                    >
                        <PlusSvg class="settings-page-heading__add--item-btn-icon"/>
                        Add Task
                    </UIButton>
                </template>
            </PageHeading>
            <TasksList
                class="settings-page__tasks-list"
                title="Upcoming"
                :tasks="tasksStore.upcomingTasks"
                can-edit
            />

            <TasksList
                class="settings-page__tasks-list"
                title="Completed"
                :tasks="tasksStore.completedTasks"
                can-edit
            />

            <UIButton
                class="settings-page-mobile-add-item-btn"
                @click="onCreateTask"
            >
                <PlusSvg class="settings-page-heading__btn-icon" />
            </UIButton>
        </div>
    </NuxtLayout>
</template>

<script setup>
import PlusSvg from '@/public/svg/plus.svg?skipsvgo';
import {useTasksStore} from '@/store/tasks'
import TasksList from "~/components/TasksList/TasksList.vue";
import {usePopupsStore} from '@/store/popups'

const tasksStore = useTasksStore();

const popupsStore = usePopupsStore();

const breadcrumbs = [
    {
        title: 'Main',
        path: '/'
    },
    {
        title: 'Settings',
    }
];

const onCreateTask = () => {
    popupsStore.setState('TaskCreatePopup', true);
}

useTasksLoaded();
</script>

<style lang="scss" src="@/pages/settings/styles.scss"/>
