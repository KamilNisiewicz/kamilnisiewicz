<template>
  <div class="aways">
    <h3>Statystyki</h3>
    <div class="stats">
      <div class="stats-elem">
        <label>Liczba wyjazdów:</label>
        <strong>{{ stats.awaysCount }}</strong>
      </div>
      <div class="stats-elem">
        <label>Przejechane kilometry:</label>
        <strong>{{ stats.distanceSum }}</strong>
      </div>
      <div class="stats-elem">
        <label>Średnia km na wyjazd: </label>
        <strong>{{ stats.distanceAvg }}</strong>
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
        <strong>{{ stats.goalsScored }}-{{ stats.goalsLost}}</strong>
      </div>
    </div>
    <List header="Województwo śląskie" :aways="awaysSilesia"></List>
    <List header="Zagranica" :aways="awaysForeign"></List>
    <List header="Polskie" :aways="awaysPoland"></List>
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
      awaysForeign: [],
      awaysPoland: [],
      awaysSilesia: [],
      stats: {}
    }
  },
  created () {
    this.createBaseDataAndStats(aways.aways)
  },
  methods: {
    createBaseDataAndStats: function (aways) {
      let foreignIterator = 0
      let polandIterator = 0
      let silesiaIterator = 0

      let distanceSum = 0

      let wins = 0
      let draws = 0
      let loses = 0
      let goalsScored = 0
      let goalsLost = 0
      let rivalCountTmp = {}

      for (let i = 0; i < aways.length; i++) {
        const currentRival = aways[i].rival
        if (isNaN(rivalCountTmp[currentRival])) {
          rivalCountTmp[currentRival] = 0
        }
        rivalCountTmp[currentRival] = (rivalCountTmp[currentRival] + 1)

        if (aways[i].silesia) {
          this.awaysSilesia[silesiaIterator] = aways[i]
          this.awaysSilesia[silesiaIterator].rivalCount = rivalCountTmp[currentRival]
          silesiaIterator++
        } else if (this.aways.aways[i].foreign) {
          this.awaysForeign[foreignIterator] = aways[i]
          this.awaysForeign[foreignIterator].rivalCount = rivalCountTmp[currentRival]
          foreignIterator++
        } else {
          this.awaysPoland[polandIterator] = aways[i]
          this.awaysPoland[polandIterator].rivalCount = rivalCountTmp[currentRival]
          polandIterator++
        }

        distanceSum += aways[i].distance

        let scoreTmp = aways[i].score.split('-')

        if (scoreTmp[0] > scoreTmp[1]) {
          loses += 1
        } else if (scoreTmp[0] < scoreTmp[1]) {
          wins += 1
        } else {
          draws += 1
        }

        goalsScored += parseInt(scoreTmp[1])
        goalsLost += parseInt(scoreTmp[0])
      }

      this.stats.distanceSum = distanceSum.toFixed(2)
      this.stats.distanceAvg = (distanceSum / aways.length).toFixed(2)
      this.stats.wins = wins
      this.stats.draws = draws
      this.stats.loses = loses
      this.stats.goalsScored = goalsScored
      this.stats.goalsLost = goalsLost
      this.stats.awaysCount = aways.length
    }
  }
}
</script>
