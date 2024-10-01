<template>
    <div :class="BEM('task', { checked, canEdit, loading })">
        <sup class="task__id">#{{ id }}</sup>
        <p class="task__title">
            {{ title }}
        </p>
        <div class="task__actions">
            <CheckedSvg
                v-if="showCheckedIcon"
                class="task__action-icon task__action-icon_type_checked"
                @click="onToggleStatus"
            />
            <SettingsSvg
                v-if="canEdit"
                class="task__action-icon task__action-icon_type_settings"
                @click="onEdit"
            />
            <TrashSvg
                v-if="canEdit"
                class="task__action-icon task__action-icon_type_trash"
                @click="onRemove"
            />
        </div>
        <Transition name="fade">
            <div
                v-if="loading"
                class="task__loader-overlay"
            >
                <Loader class="task__loader"/>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import CheckedSvg from '@/public/svg/checked.svg?skipsvgo'
import SettingsSvg from '@/public/svg/settings.svg?skipsvgo'
import TrashSvg from '@/public/svg/trash.svg?skipsvgo'

import {usePopupsStore} from '@/store/popups';
import {useTasksStore} from '@/store/tasks'

interface IProps {
    id: number
    title: string
    checked?: boolean
    canEdit?: boolean
};

const props = withDefaults(defineProps<IProps>(), {
    checked: false,
    canEdit: false,
});

const tasksStore = useTasksStore();
const popupsStore = usePopupsStore();
const loading = ref<boolean>(false);

const showCheckedIcon = computed(() => unref(props.checked) || unref(props.canEdit))

const onToggleStatus = async () => {
    if (!unref(props.canEdit) || unref(loading)) {
        return
    }

    loading.value = true;
    try {
        await tasksStore.updateTask(unref(props.id), {checked: !unref(props.checked)})
    } finally {
        loading.value = false;
    }
};

const onEdit = () => {
    popupsStore.setData({id: props.id, title: props.title, checked: props.checked});
    popupsStore.setState('TaskEditPopup', true);
};

const onRemove = async () => {
    if (!unref(props.canEdit) || unref(loading)) {
        return
    }

    loading.value = true;
    try {
        await tasksStore.removeTask(unref(props.id))
    } finally {
        loading.value = false;
    }
};
</script>


<style lang="scss" src="@/components/Task/styles.scss"/>
