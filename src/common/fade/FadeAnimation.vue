<template>
  <transition name="animate__animated animate__fadeInDown">
      <slot></slot>
  </transition>
</template>

<script>
export default {
    name: "FadeAnimation"
}
</script>

<style>
.v-enter, .v-leave-to {
    opacity: 0;
}
.v-enter-active, .v-leave-avtive {
    transition: opacity 3s;
}
</style>