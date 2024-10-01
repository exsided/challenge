<template>
    <label :class="BEM('ui-input', {error, label, onTop: Boolean(label && modelValue)})">
        <input
            :name="name"
            :type="type"
            :value="modelValue"
            class="ui-input__field"
            @input="onInput"
        >
        <Transition name="fade">
            <DangerSvg
                v-if="error"
                class="ui-input__error-icon"
            />
        </Transition>
        <span v-if="label" class="ui-input__label">
			{{ label }}
		</span>
        <div v-if="showErrorText" class="ui-input__error">
            {{ errorText }}
        </div>
    </label>
</template>

<script lang="ts" setup>
import DangerSvg from '@/public/svg/danger.svg?skipsvgo';

interface IProps {
    name?: string
    modelValue: string
    type?: string
    error?: boolean
    errorText?: string
    label?: string
};

const props = withDefaults(defineProps<IProps>(), {
    name: '',
    modelValue: '',
    type: 'text',
    error: false,
    errorText: '',
    label: '',
});

const emit = defineEmits<{
  'update:model-value': [value: string]
}>();

const showErrorText = computed(() => unref(props.error) && unref(props.errorText))

const onInput = async (event: Event) => {
    const target = event.target as HTMLInputElement;

    emit('update:model-value', target.value);
};
</script>

<style lang="scss" src="@/components/UIInput/styles.scss" />
