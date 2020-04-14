import Vue from 'vue'
import AppComponent from './components/AppComponent.vue';

let app = document.createElement('div')
app.id = 'app'

document.body.append(app)
new Vue({
  render: h => h(AppComponent)
}).$mount('#app')