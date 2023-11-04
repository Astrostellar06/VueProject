<template>
    <BaseLayout>
        <div>
            <h1>404 - Page not found</h1>
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    name: 'NotFoundPage',
    components: {
        BaseLayout,
    },
};
</script>

<style scoped>
h1 {
    margin-top: 70px;
}

</style>