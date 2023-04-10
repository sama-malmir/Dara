<template>
  <div class="w-screen">
    <div class="mx-28">
      <main>
        <NavBar/>
        <List />
      </main>
    </div>
  </div>
</template>
<script >
import List from '../components/List.vue';
import NavBar from '../components/NavBar.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    List,
    NavBar,
  }
}
</script>