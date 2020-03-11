<template>
  <div class="hello">
      {{ stats.aways_count }}<br/>
      {{ stats.distance_sum }} {{ stats.distance_avg }}<br/>
      {{ stats.goals_scored }}-{{ stats.goals_lost}}<br/>
      {{ stats.wins }}-{{ stats.draws }}-{{ stats.loses }}
      <h3>Województwo śląskie</h3>
      <ol>
        <li v-for="away in aways_silesia" :key="away.id">
          {{away.rival}} {{ away.attendance}}
        </li>
      </ol>
      <h3>Zagranica</h3>
      <ol>
        <li v-for="away in aways_foreign" :key="away.id">
          {{away.rival}} {{ away.attendance}}
        </li>
      </ol>
      <h3>Polskie</h3>
      <ol>
        <li v-for="away in aways_poland" :key="away.id">
          {{away.rival}} {{ away.attendance}}
        </li>
      </ol>
  </div>
</template>

<script>
import aways from '@/assets/aways.json'

export default {
  name: 'Aways',
  data () {
    return {
      aways: aways,
      aways_foreign: [],
      aways_poland: [],
      aways_silesia: [],
      stats: {}
    }
  },
  created () {
    this.createBaseDataAndStats(aways.aways)
  },
  methods: {
    createBaseDataAndStats: function (aways) {
      let foreign_i = 0
      let poland_i = 0
      let silesia_i = 0

      let distance_sum = 0

      let wins = 0
      let draws = 0
      let loses = 0
      let goals_scored = 0
      let goals_lost = 0

      for (let i = 0; i < aways.length; i++) {
        if (aways[i].silesia) {
          this.aways_silesia[silesia_i] = aways[i]
          silesia_i++
        } else if (this.aways.aways[i].foreign) {
          this.aways_foreign[foreign_i] = aways[i]
          foreign_i++
        } else {
          this.aways_poland[poland_i] = aways[i]
          poland_i++
        }

        distance_sum += aways[i].distance

        let score_tmp = aways[i].score.split("-")
        
        if (score_tmp[0] > score_tmp[1]){
          loses += 1
        } else if (score_tmp[0] < score_tmp[1]){
          wins += 1
        } else {
          draws += 1
        }

        goals_scored += parseInt(score_tmp[1])
        goals_lost += parseInt(score_tmp[0])
      }

      this.stats.distance_sum = distance_sum.toFixed(2)
      this.stats.distance_avg = (distance_sum / aways.length).toFixed(2)
      this.stats.wins = wins
      this.stats.draws = draws
      this.stats.loses = loses
      this.stats.goals_scored = goals_scored
      this.stats.goals_lost = goals_lost
      this.stats.aways_count = aways.length
    }
  }
}
</script>
