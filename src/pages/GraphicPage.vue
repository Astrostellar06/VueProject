<template>
    <BaseLayout>
        <div>
            <h1>Graphical Page</h1>
            <br />
            <GraphicView />
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import GraphicView from '@/components/GraphicView.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
        GraphicView
    },
}
</script>²²