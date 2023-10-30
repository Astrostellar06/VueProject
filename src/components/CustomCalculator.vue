<template>
    <div>
        <p>Average Car Travel Emissions</p>
            <br />
            <input type="number" v-model="distance" placeholder="Distance in km" />
            <button @click="calculateEmissionsTravel">Calculate Emissions for a car travel</button>
            <div id="result" v-if="emissionsTravelResult">
                <h2>Emissions Result</h2>
                <p>{{ distance }}</p>
                <p>CO2e: {{ emissionsTravelResult.co2e }} {{ emissionsTravelResult.co2e_unit }}</p>
            </div>
    </div>
</template>

<script>
export default {
    name: 'CustomCalculator',
    data() {
        return {
            apiKey: 'D9F3A5P7R9MB7ZK89PKQR27CBX2Y',
            apiUrl: 'https://beta4.api.climatiq.io/estimate',
            emissionsTravelResult: null,
            distance: 0,
        };
    },
    methods: {
        calculateEmissionsTravel(){
            const requestData = {
                emission_factor: {
                    activity_id: 'passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na',
                    data_version: '5.5',
                },
                parameters: {
                    distance: this.distance,
                    distance_unit: 'km'
                }
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            };

            fetch(this.apiUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    this.emissionsTravelResult = data;
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
}
</script>

<style>
/* Calculator styles go here */
</style>
