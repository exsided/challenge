<template>
    <ul class="breadcrumbs">
        <li
            v-for="(item, index) in items"
            :key="index"
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
            itemscope
            class="breadcrumbs__list-item"
        >
            <NuxtLink
                v-if="item.path"
                itemprop="item"
                :to="item.path"
                :class="BEM('breadcrumbs__list-item-text', {isLink: true})"
            >
                <span itemprop="name">
                    {{ item.title }}
                </span>
            </NuxtLink>
            <span
                v-else
                class="breadcrumbs__list-item-text"
            >
                <span itemprop="name">
                    {{ item.title }}
                </span>
            </span>
            <meta
                itemprop="position"
                :content="`${index + 1}`"
            />
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {RouteLocationRaw} from 'vue-router';

interface IBreadcrumb {
    title: string
    path?: RouteLocationRaw
}

interface IProps {
    items: IBreadcrumb[]
};

defineProps<IProps>();
</script>

<style lang="scss" src="@/components/Breadcrumbs/styles.scss"/>
