<template>
    <BaseLayout>
        <body>
        <div>
            <h1>Calculate CO2 emissions for a car travel</h1>
            <CustomCalculator />
        </div>
    </body>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';
import CustomCalculator from '@/components/CustomCalculator.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
        CustomCalculator,
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
  