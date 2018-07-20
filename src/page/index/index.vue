<template>
    <div class="container">
        <c-header :title-text="title">
            <router-link to="/setting" class="btn-setting">设置</router-link>
        </c-header>
        <section>
            <h2>这是首页</h2>
        </section>
        <c-footer></c-footer>
    </div>
</template>

<script>
import cHeader from '@/components/header';
import cFooter from '@/components/footer';

export default {
    data() {
        return {
            title: '首页'
        };
    },
    components: {
        cHeader,
        cFooter
    }
}
</script>

<style scoped>
.btn-setting {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 12px;
    color: #6cf;
    transform: translate(0, -50%);
}
</style>


