<template>
    <div :class="$style.wrapper">
        <HomeTitle />
        <HomeEmail />
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped module>

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

</style>
