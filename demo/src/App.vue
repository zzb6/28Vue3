<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
  *{margin:0px; padding:0px;}
  body{font-size:14px;}
  html,body{height:100%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height:100%;
    width:1100px; margin:0 auto;
    padding-top:20px;
  }
  #app a{color:#fff; text-decoration: none; margin-left:20px;}
  #app a:hover{color:khaki;}
</style>