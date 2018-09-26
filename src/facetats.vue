<template>
  <screen ref='screen' :smartCSR="true" :keys="true">

  </screen>
</template>
<script>
export default {
  name: 'facetats',
  data: () => {
    return {

    }
  },
  mounted() {
    this.$refs.screen.key(['C-c'],() => {
      process.exit(0)
    })
  }
}
</script>
