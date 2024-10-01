<template>
    <div class="page-heading">
        <h1 class="page-heading__title">
            <slot name="title" />
        </h1>
        <div class="page-heading__actions">
            <slot name="actions" />
        </div>
    </div>
</template>

<style lang="scss" src="@/components/PageHeading/styles.scss"/>
