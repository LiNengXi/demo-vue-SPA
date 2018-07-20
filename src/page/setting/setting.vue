<template>
    <section class="container">
        <c-header :title-text="title"></c-header>
        <h2>这是设置</h2>
        
        <ul class="settings">
            <li v-for="(item, index) in settingsItem" :key="index" @click="toggleTitle(index)">
                <router-link :to="{ path: item.path }" replace>{{ item.text }}</router-link>
            </li>
        </ul>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
import cHeader from '@/components/header';

export default {
    data() {
        return {
            title: '设置',
            settingsItem: [
                {
                    path: '/setting/messages',
                    text: '消息'
                },
                {
                    path: '/setting/secret',
                    text: '隐私'
                }
            ]
        };
    },
    created() {
        this.title = this.settingsItem[0].text;
    },
    components: {
        cHeader
    },
    methods: {
        toggleTitle(index) {
            this.title = this.settingsItem[index].text;
        }
    }
}
</script>

<style scoped>
.settings {
    padding: 10px 8px;
}
.settings li {
    min-height: 24px;
    line-height: 24px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>


