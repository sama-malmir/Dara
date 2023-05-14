<template>
  <div>
    <header>
    </header>

    <div class="w-screen">
      <div class="mx-28">
        <main>
          <NavBar :name="name" :wallet="balance"/>
          <List />
        </main>
      </div>
    </div>
  </div>
  <RouterView @update-wallet="getDataUser()"/>
</template>
<script >
import { RouterLink, RouterView } from 'vue-router'
import List from './components/List.vue';
import NavBar from './components/NavBar.vue';
export default {
  data() {
    return {
      name: null,
      balance: null
    };
  },
  components: {
    List,
    NavBar,
  },
  methods: {
    getDataUser() {
      fetch('http://193.70.91.1:3000/api/v1/wallet/2')
        .then(response => response.text())
        .then(response => JSON.parse(response))
        .then(response => {
          this.name = response.data.name,
            this.balance = response.data.balance
        });
    }
  },
  created() {
    this.getDataUser()
  },
}
</script>
<style scoped></style>
