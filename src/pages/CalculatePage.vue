<template>
    <BaseLayout>
        <body>
        <div>
            <h1>Calculate CO2 emissions for different activities</h1>
            <FlightCalculator /><br><br>
            <CloudComputingCalculator/>
        </div>
    </body>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';
import FlightCalculator from '@/components/FlightCalculator.vue';
import CloudComputingCalculator from '@/components/CloudComputingCalculator.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
        FlightCalculator,
        CloudComputingCalculator,
    },
};
</script>

<style scoped>
h1 {
    text-decoration: underline;
    margin: 30px;
}

body {
    margin-bottom: 60px;
}

</style>
  