import './assets/main.css'
import Lenis from '@studio-freight/lenis';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// Smooth scrolling
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);