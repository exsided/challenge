<template>
    <form class="task-form" @submit.prevent="onSubmit">
        <UIInput
            v-model="fields.title"
            label="Task name"
            :error="$v?.title?.$error"
            :error-text="$v?.title?.$errors[0]?.$message || ''"
            class="task-form__field"
        />
        <UIButton
            type="submit"
            class="task-form__submit-btn"
        >
            {{ submitBtnText }}
        </UIButton>
        <Transition name="fade">
            <div
                v-if="loading"
                class="task-form__loader-overlay"
            >
                <Loader class="task-form__loader"/>
            </div>
        </Transition>
    </form>
</template>

<script lang="ts" setup>
import {required} from '@vuelidate/validators';
import {useVuelidate} from '@vuelidate/core';

interface initialValues {
    title: string;
};

interface IProps {
    initialValues?: initialValues;
    submitBtnText: string;
    handler: (arg0: initialValues) => any;
};

const props = withDefaults(defineProps<IProps>(), {
    initialValues: () => ({title: ''}),
    submitBtnText: 'Create',
});


const fields = ref(unref(props.initialValues));
const rules = {title: {required}};
/** @public */
const loading = ref(false);

const $v = useVuelidate(rules, fields);

/** @public */
const validate = () => {
    $v.value.$touch();

    console.log($v.value)

    return $v.value.$error
}

const onSubmit = async () => {
    if (validate()) {
        return;
    }

    loading.value = true;
    await props.handler(unref(fields));
    loading.value = false;
};
</script>

<style lang="scss" src="@/components/TaskForm/styles.scss"/>
