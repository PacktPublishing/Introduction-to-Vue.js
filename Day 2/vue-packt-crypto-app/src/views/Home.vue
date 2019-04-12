<template>
  <div class="container">
    <table v-if="assets.length">
      <thead>
        <tr>
          <th>RANK</th>
          <th><input placeholder="NAME (FILTER)" v-model="filter"></th>
          <th>PRICE</th>
          <th>MARKET CAP</th>
        </tr>
      </thead>

      <tbody>
        <asset-row v-for="a in filteredAssets" :key="a.id" :asset="a" @detail="goToAssetDetail" />
      </tbody>
    </table>

    <p v-else>Loading...</p>

  </div>
</template>

<script>
import api from '@/services/api'

import AssetRow from '@/components/AssetRow'
console.log(AssetRow)

export default {
  name: 'home',
  components: { AssetRow },

  data () {
    return {
      assets: [],
      filter: ''
    }
  },

  computed: {
    filteredAssets () {
      if (!this.filter) { return this.assets }
      return this.assets.filter(a => a.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  },

  created () {
    api.getAssets()
      .then(res => (this.assets = res.data))
  },

  methods: {
    goToAssetDetail (asset) {
      this.$router.push({ name: 'asset-detail', params: { id: asset.id } })
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

input {
  border: none;
  outline: none;
  font-size: 15px;
  color: #2c3e50;
}

.container {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

thead {
  text-align: left;
}

th {
  padding: 5px 5px 5px 5px;
}
</style>
