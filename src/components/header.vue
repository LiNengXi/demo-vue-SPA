<template>
    <header>
        <span v-if="needsGoBack" @click="goBack" class="btn-goBack">返回</span>
        {{ titleText }}
        <slot></slot>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ['titleText'],
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
    computed: {
        needsGoBack() {
            let hash = location.hash;

            return !(hash === '#/' || hash === '#/about');
        }
    }
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 56px;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    color: #888;
    background-color: #eee;
}
.btn-goBack {
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 12px;
    color: #6cf;
    transform: translate(0, -50%);
}
</style>


