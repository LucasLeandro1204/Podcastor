import 'babel-polyfill';

import Vue from 'vue';
import Axios from 'axios';

import './core/components';

import App from './components/App.vue';

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;

window.App = new Vue(...App).$mount('#app');
