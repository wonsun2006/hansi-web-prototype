<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>홈</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin===false" router :to="{name: 'login'}" exact>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>로그인</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else router :to="{name: 'mypage'}" exact>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>마이페이지</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{name: 'notice-board'}" exact>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>게시판</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y v-if="isLogin">
        <v-btn
          color="primary"
          slot="activator"
          dark
          flat
          icon
        >
          {{userInfo.name}}
        </v-btn>
      <v-list>
        <v-list-tile router :to="{name: 'mypage'}">
          <v-list-tile-title>마이페이지</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-title>로그아웃</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-btn flat v-else router :to="{name: 'login'}">로그인</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { mapState, mapActions } from "vuex"

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data: () => ({
      drawer: null
    }),
    computed: {
      ...mapState(["isLogin", "userInfo"])
    },
    methods: {
      ...mapActions(['logout'])
    },
    props: {
      source: String
    }
  }
</script>
