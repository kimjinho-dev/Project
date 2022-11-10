<template>
  <div>
    <h1>home 화면입니다</h1>
    <form @submit="input">
      <input type="text" v-modle="title">
      <br>
      <input type="text" v-modle="content">
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeVue',
  data() {
    return {
      title: null,
      content:null,
    }    
  },
  methods: {
  }
}
</script>

<style>

</style>