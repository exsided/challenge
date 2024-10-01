<template>
	<transition name="fade">
		<div
            v-if="showLoader"
            class="main-preloader"
        >
			<Loader />
		</div>
	</transition>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const mainStore = useMainStore();

const showLoader = computed(() => !!mainStore.loadingUids.length);
</script>

<style lang="scss" src="@/components/MainLoader/styles.scss" />
