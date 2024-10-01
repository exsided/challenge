<template>
    <button
        :class="BEM('ui-button', { color })"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
interface IProps {
    color?: 'accent'
};

withDefaults(defineProps<IProps>(), {
    color: 'accent'
});
</script>

<style lang="scss" src="@/components/UIButton/style.scss"/>
