<template>

</template>

<script>
  import store from '../core/store';
  import vueRouter from 'vue-router';
  import routes from '../core/routes';

  export default {
    store,
    router: new vueRouter({
      routes,
    }),
  }
</script>
