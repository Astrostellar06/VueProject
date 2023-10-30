<template>
    <select v-model="iata_code_departure" @change="change1">
        <option value="" :hidden="true">Please select an airport of departure</option>
        <option v-for="airport in listAirports" :key="airport.iata_code" :value="airport.iata_code">{{ airport.name }}
        </option>
    </select>
    <br>
    <select v-model="iata_code_arrival" @change="change2">
        <option value="" :hidden="true">Please select an airport of arrival</option>
        <option v-for="airport in listAirports" :key="airport.iata_code" :value="airport.iata_code">{{ airport.name
        }}</option>
    </select>
    <br>
    <BaseButton @click="calculateEmissionsFlight" :color="'primary'" :disabled="this.disabled">Calculate Emissions for a flight</BaseButton>
    <div v-if="emissionsFlightResult">
        <h2>Emissions Result:</h2>
        <p>{{ emissionsFlightResult.co2e.toFixed(2) }} {{ emissionsFlightResult.co2e_unit }} were emitted.</p>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'FlightCalculate',
    components: {
        BaseButton,
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
            disabled: true,
            firstField: false,
            secondField: false,
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
                    console.log(data);
                    console.log(this.emissionsFlightResult);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        change1() {
            this.firstField = true;
            if (this.firstField && this.secondField) {
                this.disabled = false;
            }
        },
        change2() {
            this.secondField = true;
            if (this.firstField && this.secondField) {
                this.disabled = false;
            }
        },
    },
};
</script>

<style scoped>
select {
    margin: 10px;
    ;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #28b682;
    border-radius: 5px;
    width: 30%;
}

select:focus {
    outline: none;
    border-color: #007BFF;
}
</style>