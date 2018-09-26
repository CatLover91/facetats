<template>
  <screen ref='screen' :smartCSR="true" :keys="true">

    <box width="100%"
         :height="1"
         :bottom="0"
         :left="0"
         content="Test"
         style="bg: white; fg: black; bold: true" />
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
