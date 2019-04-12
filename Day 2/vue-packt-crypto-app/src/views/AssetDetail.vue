<template>
  <div>
    <div v-if="asset.id">
      <h3>{{ asset.id }}</h3>
      <p v-for="(v, p) in asset" :key="p">
        <b>{{ p }}:</b>
        <span>{{ v }}</span>
      </p>
    </div>

    <p v-else>Loading...</p>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  data () {
    return {
      asset: {}
    }
  },

  created () {
    const coin = this.$route.params.id

    api.getAsset(coin)
      .then(res => (this.asset = res.data))
  }
}
</script>

<style scoped>
  h3 {
    text-transform: uppercase;
  }

  p {
    display: flex;
    justify-content: space-between;
  }

  b {
    margin-right: 30px;
  }
</style>
