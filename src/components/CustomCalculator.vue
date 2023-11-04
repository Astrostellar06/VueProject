<template>
    <div>
        <p>Average Car Travel Emissions</p>
        <br />
        <input type="number" v-model="distance" placeholder="Distance in km" @change="change"/><br>
        <BaseButton @click="calculateEmissionsTravel" :color="'primary'" :disabled="this.disabled">Calculate Emissions for a car travel</BaseButton>
        <div id="result" v-if="emissionsTravelResult">
            <h2>Emissions Result:</h2>
            <p>{{ emissionsTravelResult.co2e }} {{ emissionsTravelResult.co2e_unit }} of CO2 were emitted for a travel of {{ distance }} km.</p>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'CustomCalculator',
    components: {
        BaseButton,
    },
    data() {
        return {
            apiKey: 'D9F3A5P7R9MB7ZK89PKQR27CBX2Y',
            apiUrl: 'https://beta4.api.climatiq.io/estimate',
            emissionsTravelResult: null,
            distance: 0,
            disabled: true,
        };
    },
    methods: {
        calculateEmissionsTravel() {
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
        },
        change() {
            if (this.distance > 0) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
    }
}
</script>

<style>
input {
    margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #28b682;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #007BFF;
}
</style>
