<template>
    <BaseLayout>
        <div>
            <h1>Calculate page</h1>
            <br />
            <p>Flight Emissions</p>
            <br />
            <select v-model="iata_code_departure">
                <option value="">Please select an airport of departure</option>
                <option v-for="airport in listAirports" :key="airport.iata_code" :value="airport.iata_code">{{ airport.name
                }}</option>
            </select>
            <select v-model="iata_code_arrival">
                <option value="">Please select an airport of arrival</option>
                <option v-for="airport in listAirports" :key="airport.iata_code" :value="airport.iata_code">{{ airport.name
                }}</option>
            </select>
            <button @click="calculateEmissionsFlight">Calculate Emissions for a flight</button>
            <div id="result" v-if="emissionsFlightResult">
                <h2>Emissions Result</h2>
                <p>CO2e: {{ emissionsFlightResult.co2e }} {{ emissionsFlightResult.co2e_unit }}</p>
            </div>
            <br />
            <p>Car Travel Emissions</p>
            <br />
            <input type="number" v-model="distance" placeholder="Distance in km" />
            <button @click="calculateEmissionsTravel">Calculate Emissions for a car travel</button>
            <div id="result" v-if="emissionsTravelResult">
                <h2>Emissions Result</h2>
                <p>{{ distance }}</p>
                <p>CO2e: {{ emissionsTravelResult.co2e }} {{ emissionsTravelResult.co2e_unit }}</p>
            </div>
        </div>
    </BaseLayout>
</template>
  
<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    name: 'CalculatePage',
    components: {
        BaseLayout,
    },
    data() {
        return {
            apiKey: 'D9F3A5P7R9MB7ZK89PKQR27CBX2Y',
            apiUrlDistance: 'https://beta4.api.climatiq.io/custom-mappings/estimate',
            apiUrl: 'https://beta3.api.climatiq.io/travel/flights',
            emissionsFlightResult: null,
            emissionsTravelResult: null,
            distance: 0,
            listAirports: [],
            iata_code_departure: '',
            iata_code_arrival: '',
        };
    },
    mounted() {
        //Je récupère la liste des aéroports
        fetch('https://airlabs.co/api/v9/airports?&api_key=7aa4f005-7d49-4135-ac85-a3a45cd1abdb')
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.response.length; i++) {
                    if (data.response[i].iata_code) {
                        this.listAirports.push(data.response[i]);
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        calculateEmissionsFlight() {
            const requestData = {
                legs:
                    [
                        {
                            from: this.iata_code_departure,
                            to: this.iata_code_arrival
                        }
                    ]
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
                    this.emissionsFlightResult = data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        calculateEmissionsTravel(){
            const requestData = {
                custom_mapping: {
                    label: 'car_consumption',
                    data_version: '0.0',
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

            fetch(this.apiUrlDistance, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    this.emissionsTravelResult = data;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
};
</script>

<style>
    select {
        width: 300px;
        height: 30px;
        margin: 10px;
    }
    button {
        width: 300px;
        height: 30px;
        margin: 10px;
    }
    #result {
        width: 300px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        border: 10px;
        background-color: #0680a5;
        border-radius: 10px;
        color: white;
        transition: all 1s ease;
    }
</style>
  