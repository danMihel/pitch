<template>
  <nav v-if="this.$store.state.AuthModule.logged">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/catalog">Catalog</router-link> |
    <router-link to="/favourites">Favourites</router-link> |
    <router-link to="/login" @click="logout">Logout</router-link>
  </nav>
  <router-view/>
 
</template>
<script>
export default {
    name: "app",
    methods: {
      async logout() {
        console.log('logout')
        this.$store.dispatch("AuthModule/onLogout");
        localStorage.clear();
      },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav span {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
