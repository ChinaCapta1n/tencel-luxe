<template>
    <div class="header-height"></div>
    <header class="header">
        <div class="header-top">
            <p>{{ headerData.sloganText }}</p>
            <p class="instagram-link">
                <a :href="headerData?.textWithLink?.buttonLink" >{{headerData?.textWithLink?.buttonText}}</a>
            </p>
        </div>
        <div :class="['header-bottom', isOpen]">

        </div>
    </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { API_header } from '../../api/http.js';

const headerData = ref({});
const isOpen = ref('');


onMounted(() => {
    // header data
    API_header().then(_d => {
        headerData.value = _d.data.pageData[0].data;
    })
})


</script>
<style lang="scss" scoped>
.header-height {
    height: 105px;
}
.header {
    height: 105px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .header-top {
        background-color: #000;
        min-height: 25px;
        color: #fff;
        font-size: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4rem;
        .instagram-link {
            a {
                color: #fff;
            }
        }
    }
    .header-bottom {
        height: 8rem;
        background-color: #fdfbef;
    }
}
</style>