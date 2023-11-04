<template>
    <select v-model="cloud_providers" @change="changeProvider">
        <option value="" :hidden="true">Please select a cloud provider</option>
        <option v-for="provider in listProviders" :key="provider" :value="provider">{{ provider.provider_full_name }}</option>
    </select>
    <br>
    <select v-model="region" v-if="providerHasBeenSelected" @change="change1">
        <option value="" :hidden="true">Please select a region</option>
        <option v-for="region in cloud_providers.regions" :key="region" :value="region">{{ region }}</option>
    </select>
    <br>
    <select v-model="vm" v-if="providerHasBeenSelected" @change="change2">
        <option value="" :hidden="true">Please select a virtual machine</option>
        <option v-for="vm in cloud_providers.virtual_machine_instances" :key="vm" :value="vm">{{ vm }}</option>
    </select>
    <br>
    <input type="number" v-model="duration" v-if="providerHasBeenSelected" placeholder="Duration in hours" @change="change3">
    <br>
    <BaseButton @click="calculateEmissionComputing" :disabled="disabled">Calculate Emissions for this Cloud Computing Activity</BaseButton>
    <div v-if="emissionsComputingResult">
        <h2>Emissions Result:</h2>
        <p>{{ this.emissionsComputingResult.total_co2e.toFixed(2) }} {{ this.emissionsComputingResult.total_co2e_unit }} of CO2 were emitted.</p>
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
            emissionsComputingResult: null,
            listProviders: [],
            disable1: false,
            providerHasBeenSelected: false,
            cloud_providers: '',
            region: '',
            vm: '',
            duration: '',
            firstField: false,
            secondField: false,
            thirdField: false,
            disabled: true,
        };
    },
    mounted() {
        //Je récupère les metadata
        const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            };
        fetch('https://beta4.api.climatiq.io/compute', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.listProviders = data.cloud_providers;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        changeProvider() {
            this.disable1 = true;
            this.providerHasBeenSelected = true;

        },
        calculateEmissionComputing() {

            var apiUrl = "https://beta3.api.climatiq.io/compute/" + this.cloud_providers.provider_id + "/instance";

            const requestData = {
                region: this.region,
                instance: this.vm,
                duration: this.duration
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            };

            fetch(apiUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    this.emissionsComputingResult = data;
                    console.log(data);
                    console.log(this.emissionsComputingResult);
                    console.log(this.emissionsComputingResult.total_co2e);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        change1() {
            this.firstField = true;
            if (this.firstField && this.secondField && this.thirdField) {
                this.disabled = false;
            }
        },
        change2() {
            this.secondField = true;
            if (this.firstField && this.secondField && this.thirdField) {
                this.disabled = false;
            }
        },
        change3() {
            this.thirdField = true;
            if (this.firstField && this.secondField && this.thirdField) {
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