<template>
  <div class="aways">
    <h3>Statystyki</h3>
    <div class="stats">
      <div class="stats-elem">
        <label>Liczba wyjazdów:</label>
        <strong>{{ stats.aways_count }}</strong>
      </div>
      <div class="stats-elem">
        <label>Przejechane kilometry:</label>
        <strong>{{ stats.distance_sum }}</strong>
      </div>
      <div class="stats-elem">
        <label>Średnia km na wyjazd: </label>
        <strong>{{ stats.distance_avg }}</strong>
      </div>
      <div class="stats-elem">
        <label>Zwycięstwa:</label>
        <strong>{{ stats.wins }}</strong>
      </div>
      <div class="stats-elem">
        <label>Remisy:</label>
        <strong>{{ stats.draws }}</strong>
      </div>
      <div class="stats-elem">
        <label>Porażki:</label>
        <strong>{{ stats.loses }}</strong>
      </div>
      <div class="stats-elem">
        <label>Bilans bramkowy:</label>
        <strong>{{ stats.goals_scored }}-{{ stats.goals_lost}}</strong>
      </div>
    </div>
    <List header="Województwo śląskie" :aways="aways_silesia"></List>
    <List header="Zagranica" :aways="aways_foreign"></List>
    <List header="Polskie" :aways="aways_poland"></List>
  </div>
</template>

<script>
import aways from '@/assets/aways.json'
import List from './List'

export default {
  name: 'Aways',
  components: {
    List
  },
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
      let rival_count_tmp = {}

      for (let i = 0; i < aways.length; i++) {
        const current_rival = aways[i].rival
        if(isNaN(rival_count_tmp[current_rival])){
          rival_count_tmp[current_rival] = 0;
        }
        rival_count_tmp[current_rival] = (rival_count_tmp[current_rival] + 1)

        if (aways[i].silesia) {
          this.aways_silesia[silesia_i] = aways[i]
          this.aways_silesia[silesia_i].rival_count = rival_count_tmp[current_rival]
          silesia_i++
        } else if (this.aways.aways[i].foreign) {
          this.aways_foreign[foreign_i] = aways[i]
          this.aways_foreign[foreign_i].rival_count = rival_count_tmp[current_rival]
          foreign_i++
        } else {
          this.aways_poland[poland_i] = aways[i]
          this.aways_poland[poland_i].rival_count = rival_count_tmp[current_rival]
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
