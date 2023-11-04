<template>
  <header>
    <div class="home">
      <router-link to="/" class="left">
        <img src="../assets/home_circle_icon_137496.png" alt="home" height="10px" class="home-icon">
        <h1 class="text">Home</h1>
      </router-link>
    </div>
    <nav class="menuNav" v-if="user">
      <ul>
        <li class="menu-deroulant">
          <div class="right">
            <h1 class="text">Calculate</h1>
          </div>
          <ul class="sous-menu" name="sous-menu1">
            <li class="exclude">
              <router-link to="/flight" class="router">
                Flight Travel
              </router-link>
            </li>
            <li class="exclude">
              <router-link to="/cloud" class="router">
                Cloud Computing
              </router-link>
            </li>
            <li class="exclude">
              <router-link to="/custom" class="router">
                Car Travel
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <div class="right">
            <router-link to="/graphic" class="router2">
              <h1 class="text">Graphics</h1>
            </router-link>
          </div>
        </li>
        <li>
          <div class="right">
            <router-link to="/about" class="router2">
              <h1 class="text">About</h1>
            </router-link>
          </div>
        </li>
      </ul>
    </nav>
    <nav v-if="user" class="menuNav2">
      <ul class="right">
        <li class="menu-deroulant">
          <div class="right">
            <h1 class="text">Welcome {{ user.name }}</h1>
            <img src="../assets/profile.png" height="10px" class="profile-icon">
          </div>
          <ul class="sous-menu">
            <li class="logout">
              <SignoutButton />
            </li>
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

.router {
    text-decoration: none;
    color: black;
}

.router2 {
    text-decoration: none;
}

.exclude {
  color: black;
}
.menuNav {
  width: 50%;
  font-size: 18px;
  position: sticky;
  top: 0;
  height: 42px;
  border-radius: 5px 5px 0px 0px;
}

.menuNav2 {
  width: auto;
  font-size: 18px;
  position: sticky;
  top: 0;
}

.menuNav ul {
  list-style-type: none;
}

.menuNav>ul>li {
  position: relative;
  height: 50%;
  flex: 1;
}

.menuNav ul li:not(.exclude) {
  height: 42px;
  border-radius: 5px;
}

.menuNav ul li:not(.exclude):hover {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
}

.menuNav>ul>li:hover>div {
  color: #2169EC;
}

.menuNav>ul>li>div {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
}

.menuNav ul li ul {
  position: absolute;
  margin-top: 40px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #0680a5;
  color: white;
  margin: -8px;
  margin-bottom: 20px;
}

h1 {
  font-size: medium;
}

.home {
  margin-left: 10px;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out;
}

.home:hover {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
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

.menuNav2 {
  width: auto;
  font-size: 18px;
  position: sticky;
  top: 0;
}

nav>ul {
  display: flex;
  text-align: center;
  height: 45px;
  border-radius: 5px 5px 0px 0px;
}

.menuNav>ul {
  height: 5px;
}

.menuNav2 ul {
  list-style-type: none;
}

.menuNav2 ul:hover {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
}

.menuNav2>ul>li {
  position: relative;
  height: 100%;
  flex: 1;
}

.menu-deroulant>div:after {
  content: '❯';
  color: white;
  font-size: 15px;
  margin-left: 7px;
  display: inline-block;
}

.menu-deroulant:hover>div:after {
  animation: rotationFleche 0.2s linear forwards;
}

@keyframes rotationFleche {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(45deg);
  }

  100% {
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

.menu-deroulant:hover>.sous-menu {
  animation: apparitionSousMenu 1s forwards;
}

@keyframes apparitionSousMenu {
  0% {
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0);
  }

  30% {
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }

  100% {
    max-height: 50em;
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
}


.exclude:hover {
  background-color: rgba(6, 128, 165, 0.5);
  transition: background-color 0.2s ease-in-out;
}

.exclude {
  transition: background-color 0.2s ease-in-out;
}

.sous-menu>li>a {
  align-items: center;
  display: flex;
  height: 50px;
  padding-left: 20px;
  width: 100%;
  transition: color 0.2s ease-in-out;
}

.sous-menu>li:hover>a {
  color: white;
  transition: color 0.2s ease-in-out;
}

.logout {
  border-top: 3px solid white;
  transition: border-top 0.2s ease-in-out;
}

.logout:hover {
  border-top: 3px solid red;
  transition: border-top 0.4s ease-in-out;
}
</style>