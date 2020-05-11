import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './element-variables.scss'
import moment from 'moment';
import ViewUI from 'view-design';
import '../my-theme/index.less';
import VueParticles from 'vue-particles'
Vue.use(VueParticles);
Vue.use(ViewUI);
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue);

moment.locale('zh-cn');
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
