<template>
  <div class="container">
    
    <router-link to="/ingresar">Ingresar</router-link>
     <router-link to="/token">Token</router-link>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}
a {
  padding: 0px 70px;
  position: relative;
  top: 15px;
}
.container {
  background: #362c74;
  position: fixed;
  padding: 10px;
  top: 0px;
  left: 0;
  width: 100%;
  height: 5%;
  border-bottom: 2px solid #00afa9;
}
</style>