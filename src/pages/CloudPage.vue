<template>
    <BaseLayout>
        <body>
        <div>
            <h1>Calculate CO2 emissions for cloud computing activities</h1>
            <CloudComputingCalculator/>
        </div>
    </body>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';
import CloudComputingCalculator from '@/components/CloudComputingCalculator.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
        CloudComputingCalculator,
    },
};
</script>

<style scoped>
h1 {
    text-decoration: underline;
    margin: 30px;
    font-size: medium;
}

body {
    margin-bottom: 60px;
}

</style>
  