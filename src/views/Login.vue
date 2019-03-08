<template>
<v-container fill-height style="max-width:450px;">
  <v-layout align-center row wrap>
    <v-flex xs12>
      <v-card>
        <v-alert
        :value="isLoginError"
        type="error"
        >
        아이디 혹은 비밀번호가 일치하지 않습니다.
        </v-alert>
        <v-alert
         :value="isLogin"
         type="success"
         >
         로그인 성공
        </v-alert>
        <v-toolbar flat color="info">
          <v-toolbar-title>로그인</v-toolbar-title>
        </v-toolbar>
        <div class="pa-3">
        <v-text-field v-model="user_ID"
                      label="아이디">
        </v-text-field>
        <v-text-field :append-icon="show_pwd ? 'visibility_off' : 'visibility'"
                      :type="show_pwd ? 'text' : 'password'"
                      v-model="user_pwd"
                      label="비밀번호"
                      class="input-group--focused"
                      @click:append="show_pwd = !show_pwd">
         </v-text-field>
         <v-btn color="info"
                large
                block
                depressed
                @click="login({user_ID, user_pwd})"
                >로그인</v-btn>
      </div>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import{ mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      user_ID: null,
      user_pwd: null,
      show_pwd: false, //비밀번호 입력 내용 보이기/안보이기
    }
  },
  computed:{
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
  }
}
</script>
