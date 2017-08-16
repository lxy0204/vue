/*jshint esversion: 6 */
import Vue from "vue";

var demo = new Vue({
  el: '#main',
  data: {
    active: 'home'
  },
  methods: {
    makeActive: function(item){
      this.active = item;
    }
  }
});