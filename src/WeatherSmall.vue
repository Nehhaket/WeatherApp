<template>
    <div class="col-md-4 col-sm-6 col-xs-12 text-center">
        <img :src="imgSrc">
        <br>
        <span>{{ cityName }}</span>
        <br>
        <span>{{ temperature }}</span>
        <br>
        <span>{{ humidity }}</span>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['woeid'],
        data: () => ({
            cityName: 'Loading...',
            temperature: '',
            humidity: '',
            imgSrc: ''
        }),
        created () {
            axios.get(`https://crossorigin.me/https://www.metaweather.com/api/location/${this.woeid}/`)
            .then(res => {
                const weather = res.data.consolidated_weather[0];
                this.imgSrc = `http://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
                this.cityName = res.data.title;
                this.humidity = `humidity: ${weather.humidity}%`;
                this.temperature = `${Math.round(weather.the_temp)}°C`;
            })
            .catch(e => {
                this.cityName = 'Error loading data.';
                this.imgSrc = 'https://images.vexels.com/media/users/3/134546/isolated/preview/b1b61276fef1c4a683aabaa53833c7ca-emoji-emoticon-sad-by-vexels.png';
                this.humidity = 'WOEID: ' + this.woeid;
            });
        }
    }
</script>

<style lang="scss" scoped>
    $color: #EEEEEE;
    img {
        background-color: $color;
        border-radius: 10px;
        padding: 5px;
    }
</style>
