<template>
    <header>
        <router-link to="/" class="left">
            <img src="../assets/home_circle_icon_137496.png" alt="home" height="10px" class="home-icon">
            <h1 class="text">Home</h1>
        </router-link>
        <nav v-if="user">
                <ul class="right">
                    <li class="menu-deroulant">
                        <div class="right">
                            <h1 class="text">Welcome {{ user.name }}</h1>
                            <img src="../assets/profile.png" height="10px" class="profile-icon">
                        </div>
                        <ul class="sous-menu">
                            <li class="full-width"><SignoutButton/></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        <div class="right" v-else>
            <h1 class="text">Not yet logged in</h1>
            <img src="../assets/profile.png" height="10px" class="profile-icon">
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import SignoutButton from '@/components/SignoutButton.vue';

export default {
    name: 'BaseHeader',
    components: {
        SignoutButton,
    },
    data() {
        return {
            showMenu: false,
        }
    },
    computed: {
        ...mapState(['user']),
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #28b682;
    color: white;
    margin: -8px;
    margin-bottom: 20px;
}

h1 {
    font-size: medium;
}

.left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
}

.right {
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-top: 3px;
}

.text {
    margin: 10px;
    color: white;
}

.home-icon {
    width: 30px;
    height: auto;
    margin-left: 10px;
    filter: invert(100%);
}

.profile-icon {
    width: 30px;
    height: auto;
    margin-right: 10px;
    filter: invert(100%);
}

.right:hover .menu {
    display: block;
}

* {
  margin: 0px;
  padding: 0px;
  font-family: Montserrat, sans-serif;
}

nav {
  width: auto;
  font-size: 18px;
  position: sticky;
  top: 0;
}

nav > ul {
  display: flex;
  text-align: center;
  height: 45px;
  border-radius: 5px 5px 0px 0px;
}

nav ul {
  list-style-type: none;
}

nav ul:hover {
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.3);
    transition: box-shadow 0.2s ease-in-out;
}

nav > ul > li {
  position: relative;
  height: 100%;
  flex: 1;
}

.menu-deroulant > div:after{
  content: '❯';
  font-size: 15px;
  margin-left: 7px;
  display: inline-block;
}

.menu-deroulant:hover > div:after{
  animation: rotationFleche 0.2s linear forwards;
}

@keyframes rotationFleche {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100%{
    transform: rotate(90deg);
  }
}

.sous-menu {
  margin-top: 0px;
  width: 100%;
  text-align: left;
  overflow: hidden;
  max-height: 0;
  border-radius: 0px 0px 5px 5px;
  background-color: white;
}

.menu-deroulant:hover > .sous-menu {
  animation: apparitionSousMenu 1s forwards;
}

@keyframes apparitionSousMenu {
  0% {
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0);
  }
  30% {
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
  }
  100% {
    max-height: 50em;
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
  }
}

.sous-menu > li:hover {
  background-color: rgba(33, 105, 236, 0.3);
}

.sous-menu > li > a {
  align-items: center;
  display: flex;
  height: 50px;
  padding-left: 20px;
  width: 100%;
}

.sous-menu > li:hover > a {
  color: white;
}
</style>