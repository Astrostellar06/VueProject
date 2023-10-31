<template>
  <div>
    <div>
      <h2>Comparison of Water Consumption between France and the USA</h2>
      <line-chart :data="waterData" :library="{ animation: { easing: 'easeOutQuad' } }"></line-chart>
    </div>
    <div>
      <h2>Comparison of Electricity Consumption between France and the USA</h2>
      <column-chart :data="electricityData" :library="{ animation: { easing: 'easeOutQuad' } }"></column-chart>
    </div>
    <div>
      <h2>Comparison of Air Travel Emissions between France and the USA</h2>
      <column-chart :data="airTravelData" :library="{ animation: { easing: 'easeOutQuad' } }"></column-chart>
    </div>
  </div>
</template>
  
<script>
import { LineChart, ColumnChart } from 'vue-chartkick';
import 'chart.js';

export default {
  name: 'GraphicView',
  components: {
    LineChart,
    ColumnChart
  },
  data() {
    return {
      apiKey: 'D9F3A5P7R9MB7ZK89PKQR27CBX2Y',
      apiUrl: 'https://beta4.api.climatiq.io/batch',
      waterData: {
        'France': null,
        'USA': null,
      },
      electricityData: {
        'France': null,
        'USA': null,
      },
      airTravelData: {
        'France': null,
        'USA': null,
      },
    };
  },
  mounted() {
    const requestData =
      [
        {
          emission_factor: {
            activity_id: "water_supply-type_water_decarbonised_market_for_water_decarbonised",
            data_version: "5.5",
            region: "US"
          },
          parameters: {
            weight: 54514575000,
            weight_unit: "t"
          }
        },
        {
          emission_factor: {
            activity_id: "water_supply-type_water_decarbonised_market_for_water_decarbonised",
            data_version: "5.5",
            region: "FR"
          },
          parameters: {
            weight: 4100000000,
            weight_unit: "t"
          }
        },
      ];
      const requestOptions =
      {
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
          this.waterData.USA = data[0];
          this.waterData.France = data[1];
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
</script>