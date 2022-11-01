<template>
    <div class="content">
        <!-- header -->
        <header>header</header>

        <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </router-view>
        
        <!-- footer -->
        <footer>footer</footer>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
</style>