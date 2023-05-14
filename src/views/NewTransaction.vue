<template>
  <div>
    <NewTransaction @update-wallet="doClick()" />
  </div>
</template>
<script>
import NewTransaction from '../components/NewTransaction.vue'
export default {
  methods: {
    doClick() {
      this.$emit('updateWallet')
    }
  },
  components: {
    NewTransaction,
  },
}
</script>
  
<style></style>