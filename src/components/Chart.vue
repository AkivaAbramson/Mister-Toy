
<template>
    <div class="chart">

        <DoughnutChart :chartData="testData" />
    </div>
  </template>

<script lang="ts">
import { toyService } from '../services/toy.service.js'
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  data() {
    return {
      toys: [],
      labelCount: null,
      testData: {
        labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'],
        datasets: [
          {
            data: [],
            backgroundColor: ['#77CEFF','#0079AF','#123E6B','#97B0C4',
                                '#A5C8ED','#8DD3C7','#FDB462','#B3DE69'
                            ],
          },
        ],
      }
    }
  },
  created() {
    this.toys = this.$store.getters.allToys;
    this.setLabelCount()
  },
  methods: {
    setLabelCount() {
      const labelCount = Array(this.testData.labels.length).fill(0);
      this.toys.forEach(toy => {
        toy.labels.forEach(label => {
          const index = this.testData.labels.indexOf(label);
          if (index !== -1) {
            labelCount[index]++;
          }
        });
      });
      this.labelCount = labelCount;
      this.testData.datasets[0].data = [...this.labelCount];
      console.log(this.testData.datasets[0].data = [...this.labelCount])
      
    },
  },
  name: 'Home',
  components: { DoughnutChart },
}
</script>

<style>
.chart{
    width: 300px;
    height: 300px;
    margin-inline: auto;
    margin-block-start: 20px;

    padding: 10px;
    background-color: lightblue;
}
</style>