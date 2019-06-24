<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html {
  font-size: 20px;
}

body {
  background-color: #181E24;
  outline: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2863b3;
  margin-top: 60px;
}

input {
  outline: none;
}

a {
  text-decoration: none;
  user-select: none;
}

</style>
