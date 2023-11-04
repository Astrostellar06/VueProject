<template>
    <BaseLayout>
        <body>
            <h3>Welcome to our project</h3>
            <br>
            <p>This project is a CO2 emission calculator. It allows you to calculate the CO2 emissions of your flights, your cloud computing activities and your car trips.</p>
            <p>It also allows you to compare the CO2 emissions of France and England from different sources.</p>
            <p>Our project is based on the Climatiq API.</p>
            <br><br>
            <p>This project was made by a team of 2 students from <a href="https://www.efrei.fr/">EFREI Paris</a> during the year 2023-2024: Esteban Finance-Madureira & Clément Laubertie</p>
        </body>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
    },
};
</script>

<style scoped>
a {
    color: #0680a5;
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    color: #045872;
    text-decoration: underline;
    transition: 0.3s;
}
</style>
  