<template>
    <div :class="classes">
        <span>{{ cityName }}</span>
        <br>
        <span>{{ temperature }}</span>
        <br>
        <span>{{ humidity }}</span>
        <br>
        <br>
        <a href="https://github.com/Nehhaket" class="btn" role="button">CLICK ME!</a>
        <img :src="imgSrc">
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
            imgSrc: '',
            classes: [
                'container-fluid',
                'content',
                'jumbotron'
            ]
        }),
        created () {
            axios.get(`https://crossorigin.me/https://www.metaweather.com/api/location/${this.woeid}/`)
            .then(res => {
                const weather = res.data.consolidated_weather[0];
                this.imgSrc = `http://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
                this.cityName = res.data.title;
                this.humidity = `humidity: ${weather.humidity}%`;
                this.temperature = `${Math.round(weather.the_temp)}°C`;
                console.log(res.data);
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
    img {
        position: relative;
        top: -120px;
        max-height: 150px;
    }
    div {
        color: #FFFFFF;
        background-image: url('http://cdn27.se.smcloud.net/t/photos/478342/warszawa1.jpg');
        background-position: center;
    }
    .btn {
        background: #AAAAFF;
        color: #000000;
        z-index: 1; position:relative;
    }
</style>
