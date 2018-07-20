<template>
    <div class="container">
        <c-header :title-text="title"></c-header>
        <section>
            <h2>这是关于</h2>
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
            title: '关于'
        };
    },
    components: {
        cHeader,
        cFooter
    }
}
</script>

<style scoped>

</style>