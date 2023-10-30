<template>
    <BaseLayout>
        <div>
            <h1>Calculate page</h1>
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
            <div v-if="emissionsFlightResult">
                <h2>Emissions Result</h2>
                <p>CO2e: {{ emissionsFlightResult.co2e }} {{ emissionsFlightResult.co2e_unit }}</p>
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
            apiKey: 'K5XS7KJYR3MX9CQR8JZ1G4DZ0QT0',
            //apiUrl: 'https://beta3.api.climatiq.io/travel/distance',
            apiUrl: 'https://beta3.api.climatiq.io/travel/flights',
            emissionsFlightResult: null,
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
    },
};
</script>
  