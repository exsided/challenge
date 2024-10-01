<template>
    <NuxtLayout name="default">
        <div class="index-page container">
            <PageHeading>
                <template #title>
                    Main page
                </template>
            </PageHeading>
            <TasksList
                class="index-page__tasks-list"
                title="Upcoming"
                :tasks="upcomingTasks"
            />

            <TasksList
                class="index-page__tasks-list"
                title="Completed"
                :tasks="completedTasks"
            />
        </div>
    </NuxtLayout>
</template>

<script setup>
import {useTasksStore} from '@/store/tasks'
import TasksList from "~/components/TasksList/TasksList.vue";

const {upcomingTasks, completedTasks} = useTasksStore();

useTasksLoaded();
</script>

<style lang="scss" src="@/pages/index/styles.scss" />
