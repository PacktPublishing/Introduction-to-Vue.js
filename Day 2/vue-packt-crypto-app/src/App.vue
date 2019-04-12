<template>
  <div id="app">
    <nav>
      <router-link to="/" class="logo">
        Crypto Rates
      </router-link>
      <router-link to="/about" class="route-link">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  padding: 0px 0 10px 0;
  align-items: center;
  justify-content: flex-start;
}

.logo {
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 20px;
  margin-top: 25px;
  margin-left: 30px;
}

.route-link {
  margin-top: 25px;
  margin-right: 50px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 600;
}

nav {
  height: 80px;
  background: orange;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
