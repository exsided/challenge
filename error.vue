<template>
    <div class="error-page">
        <div>
            <h1>Дальше живут драконы</h1>
            <p>Вы докликали до края света. Ну, или опечатались в адресе</p>

            <NuxtLink
                class="error-page__btn"
                to="/"
            >
                На главную
            </NuxtLink>
        </div>

        <img
            class="error-page__img"
            src="/img/dragon.png"
            alt="дракон с факелом освещает край света"
        >
    </div>
</template>

<script setup>
useHead({title: 'Край света'})
</script>

<style lang="scss">
.error-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: vw(100 100 0 100, $desktop);
    min-height: 100vh;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: static;
    }

    &__btn {
        display: block;
        padding: vw(10 15, $desktop);
        background-color: $accent-color;
        text-decoration: none;
        border-radius: vw(5, $desktop);
        margin-top: vw(60, $desktop);
        color: #ffffff;
        width: fit-content;
    }

    &__img {
        pointer-events: none;
        height: vw(400, $desktop);
        width: auto;
        margin-top: auto;
        margin-bottom: vw(-25, $desktop);
    }
}
</style>
