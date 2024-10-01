<template>
    <main class="default-layout">
        <Navigation class="default-layout__navigation" />
        <div class="default-layout__content">
            <slot />
        </div>
    </main>
    <MainLoader />
    <Popup />
</template>

<style lang="scss" src="@/assets/scss/layouts/default.scss" />
