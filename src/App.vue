<template>
  <Navbar/>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: inherit;
  text-decoration: none;
  &:hover, &:focus, &:active{
    color: inherit;
    text-decoration: none;
  }
}
*{
  box-sizing: border-box !important;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Navbar from "@/components/layout/navbar";
export default {
  components: {Navbar}
}
</script>