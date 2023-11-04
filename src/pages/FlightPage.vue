<template>
    <BaseLayout>
        <body>
        <div>
            <h1>Calculate CO2 emissions for a flight</h1>
            <FlightCalculator />
        </div>
    </body>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';
import FlightCalculator from '@/components/FlightCalculator.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
        FlightCalculator,
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
  