<template>
    <aside class="navigation">
        <div class="navigation__spacer" />
        <NuxtLink
            v-for="(navigationItem, index) in MENU_NAVIGATION"
            class="navigation__action"
            :key="index"
            :to="navigationItem.link"
            :title="navigationItem.title"
        >
            <component
                :class="BEM('navigation__action-icon', { icon: navigationItem.iconName })"
                :is="navigationItem.iconComponent"
            />
        </NuxtLink>
        <button class="navigation__action navigation__action_logout">
            <LogoutSvg :class="BEM('navigation__action-icon', { icon: 'logout' })"/>
        </button>
    </aside>
</template>

<script setup>
import LogoutSvg from '@/public/svg/logout.svg?skipsvgo'

import {MENU_NAVIGATION} from '@/constants/menu-navigation'
</script>

<style lang="scss" src="@/components/Navigation/styles.scss"/>
