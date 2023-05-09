<template>
    <v-form @submit="onSubmit">
        <v-text-field :class="$style.email">
            <template v-slot:prepend>
                <v-icon>mdi-email</v-icon>
            </template>
            <template v-slot:append>
                <v-btn type="submit" color="primary">Submit</v-btn>
            </template>
        </v-text-field>
    </v-form>
</template>

<script setup>

const onSubmit = () => {
    console.log('submit');
}
</script>

<style lang="scss" scoped module>

.email {
    width: 300px;
}
</style>
