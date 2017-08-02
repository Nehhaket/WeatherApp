import Vue from 'vue'
import WeatherSmall from './WeatherSmall.vue'
import WeatherBig from './WeatherBig.vue'

const prop = function() {
    return { props: { woeid: this.woeid } }
};

new Vue({
    el: '#location_0',
    data: {
        woeid: 523920
    },
    render: function(h) {
        return h(WeatherBig, prop.call(this))
    }
})

new Vue({
   el: '#location_1',
   data: {
       woeid: 44418
   },
   render: function(h) {
       return h(WeatherSmall, prop.call(this))
   }
});

new Vue({
   el: '#location_2',
   data: {
       woeid: 554890
   },
   render: function(h) {
       return h(WeatherSmall, prop.call(this))
   }
});

new Vue({
   el: '#location_3',
   data: {
       woeid: 2165352
   },
   render: function(h) {
       return h(WeatherSmall, prop.call(this))
   }
});

new Vue({
   el: '#location_4',
   data: {
       woeid: 946738
   },
   render: function(h) {
       return h(WeatherSmall, prop.call(this))
   }
});

new Vue({
   el: '#location_5',
   data: {
       woeid: 727232
   },
   render: function(h) {
       return h(WeatherSmall, prop.call(this))
   }
});
