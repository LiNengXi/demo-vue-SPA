<template>
    <footer>
        <router-link v-for="(item, index) in footerItem" 
                    :key="index" 
                    :to="{ path: item.path }" 
                    tag="div"
                    class="footer-item"
                    active-class="active"
                    exact>{{ item.text }}</router-link>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            footerItem: [
                {
                    path: '/',
                    text: '首页'
                },
                {
                    path: '/about',
                    text: '关于'
                }
            ]
        }
    }
}
</script>

<style scoped>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    min-height: 56px;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    color: #888;
    background-color: #eee;
}
.footer-item {
    flex: 1;
}
.active {
    color: #fff;
    background-color: lightcoral;
}
</style>


