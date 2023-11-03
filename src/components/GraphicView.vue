<template>
  <div>
    <div class=chart-container v-if="waterLoaded">
      <h2>Comparison of Water Consumption between France and the UK</h2>
      <column-chart class="charts" :data="waterData" width="800px" height="500px" :library="chartLibrary" :colors="[['#0b6e00', '#006ca2']]"></column-chart>
    </div>
    <br />
    <div class=chart-container v-if="electricityLoaded">
      <h2>Comparison of Electricity Consumption between France and the UK</h2>
      <column-chart class="charts" :data="electricityData" width="800px" height="500px" :library="chartLibrary" :colors="[['#0b6e00', '#006ca2']]"></column-chart>
    </div>
    <br />
    <div class=chart-container v-if="hotelLoaded">
      <h2>Comparison of Hotels Emissions between France and the UK</h2>
      <column-chart class="charts" :data="hotelData" width="800px" height="500px" :library="chartLibrary" :colors="[['#0b6e00', '#006ca2']]"></column-chart>
    </div>
  </div>
</template>
  
<script>
import {ColumnChart} from 'vue-chartkick';
import 'chart.js';

export default {
  name: 'GraphicView',
  components: {
    ColumnChart
  },
  data() {
    return {
      apiKey: 'D9F3A5P7R9MB7ZK89PKQR27CBX2Y',
      apiUrl: 'https://beta4.api.climatiq.io/batch',
      waterLoaded: false,
      electricityLoaded: false,
      hotelLoaded: false,
      waterData: {
        'United Kingdom': null,
        'France': null
      },
      electricityData: {
        'United Kingdom': null,
        'France': null
      },
      hotelData: {
        'United Kingdom': null,
        'France': null
      },
      chartLibrary: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      }
    };
  },
  mounted() {
    this.computeWaterData();
    this.computeElectricityData();
    this.computeHotelData();
  },
  methods:{
    computeWaterData() {
      const requestData =
        [
          {
            emission_factor: {
              activity_id: "water_treatment-type_collected_purified_water_distribution_of_water_services",
              data_version: "5.5",
              region: "GB"
            },
            parameters: {
              money: 10600000000,
              money_unit: "eur"
            }
          },
          {
            emission_factor: {
              activity_id: "water_treatment-type_collected_purified_water_distribution_of_water_services",
              data_version: "5.5",
              region: "FR"
            },
            parameters: {
              money: 17794000000,
              money_unit: "eur"
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
            this.waterData['United Kingdom'] = data.results[0].co2e;
            this.waterData.France = data.results[1].co2e;
            console.log("water",this.waterData);
            this.waterLoaded = true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    computeElectricityData() {
      const requestData =
        [
          {
            emission_factor: {
              activity_id: "electricity-supply_grid-source_production_mix",
              data_version: "5.5",
              region: "GB"
            },
            parameters: {
              energy: 1171080,
              energy_unit: "TJ"
            }
          },
          {
            emission_factor: {
              activity_id: "electricity-supply_grid-source_production_mix",
              data_version: "5.5",
              region: "FR"
            },
            parameters: {
              energy: 1710000,
              energy_unit: "TJ"
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
            console.log(data);
            this.electricityData['United Kingdom'] = data.results[0].co2e;
            this.electricityData.France = data.results[1].co2e;
            console.log("elec", this.electricityData);
            this.electricityLoaded = true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    computeHotelData() {
      const requestData =
        [
          {
            emission_factor: {
              activity_id: "accommodation_type_hotel_stay",
              data_version: "5.5",
              region: "GB"
            },
            parameters: {
              number: 800000,
            }
          },
          {
            emission_factor: {
              activity_id: "accommodation_type_hotel_stay",
              data_version: "5.5",
              region: "FR"
            },
            parameters: {
              number: 700000,
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
            console.log(data);
            this.hotelData['United Kingdom'] = data.results[0].co2e;
            this.hotelData.France = data.results[1].co2e;
            console.log("elec", this.hotelData);
            this.hotelLoaded = true;
          })
          .catch((error) => {
            console.error(error);
          });
    }
  }
}
</script>

<style>

  .chart-container {
    justify-content: center;
    margin: 20px;
  }

  h2 {
    text-align: center;
  }

  .charts {
    /*center the chart*/
    margin: auto;

  }

</style>