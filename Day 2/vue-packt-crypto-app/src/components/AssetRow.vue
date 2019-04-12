<template>
  <tr>
    <td>#{{ asset.rank }}</td>
    <td>
      <a @click="detailClick">{{ asset.name }}</a>
      <small>{{ asset.symbol }}</small>
    </td>
    <td>{{ parseInt(asset.priceUsd) }}</td>
    <td>{{ parseInt(asset.marketCapUsd) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'AssetRow',
  props: ['asset'],

  methods: {
    detailClick () {
      this.$emit('detail', this.asset)
    }
  }
}
</script>

<style scoped>
  td {
    padding: 20px 5px;
    text-align: left;
    border-top: 1px solid rgb(236, 239, 241);
    margin: 0;
  }

  small {
    margin-left: 10px;
    color: #ccc;
    font-weight: bold;
    font-size: 12px;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
  }
</style>
