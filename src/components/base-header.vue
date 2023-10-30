<template>
    <header>
        <router-link to="/" class="left">
            <img src="../assets/home_circle_icon_137496.png" alt="home" height="10px" class="home-icon">
            <h1 class="text">Home</h1>
        </router-link>
        <div class="right">
            <h1 v-if="user" class="text">Welcome {{user.name}}</h1>
            <h1 v-else class="text">Not yet logged in</h1>
            
            
            <img src="../assets/profile.png" height="10px" class="profile-icon">
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BaseHeader',
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
    margin-right: 10px ;
    text-decoration: none;
}

.right {
    display: flex;
    align-items: center;
    margin-right: 10px;
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

</style>