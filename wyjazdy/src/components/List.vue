<template>
    <div class="aways_list">
        <h3>{{ header }}</h3>
        <div class="aways_list_content aways_header">
          <div class="elem elem-small"></div>
          <div class="elem elem-big">Przeciwnik</div>
          <div class="elem elem-smaller">Wynik</div>
          <div class="elem">Data</div>
          <div class="elem">Frekwencja</div>
          <div class="elem">Odległość</div>
          <div class="elem">Rozgrywki</div>
        </div>
        <div v-for="(away, counter) in aways" :key="away.id" class="aways_list_content aways_elem">
          <div class="elem elem-small">{{ counter+1 }}</div>
          <div class="elem elem-big">{{ away.rival }} ({{ away.rival_count }})</div>
          <div class="elem elem-smaller">{{ away.score }}</div>
          <div class="elem">{{ away.date }}</div>
          <div class="elem">{{ away.attendance }}</div>
          <div class="elem">{{ away.distance }}</div>
          <div class="elem">{{ away.type }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {}
  },
  props: {
    header: String,
    aways: Object
  }
}
</script>
