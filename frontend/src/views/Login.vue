<template>
   <div>
      <v-row class="fill-height"
             align="center"
             justify="center">
         <v-col cols="4">
            <v-card class="login-card">
               <v-card-title>
                  <div class="title">
                     <span>{{ $t("login.welcome") }}</span>
                  </div>
               </v-card-title>

               <v-card-text>
                  <v-form @submit.prevent="">
                     <v-text-field v-model="user.email"
                                   :label="$t('signup.username')"
                                   required
                                   @keyup.enter="loginSubmit" />

                     <v-text-field v-model="user.password"
                                   :label="$t('signup.password')"
                                   type="password"
                                   required
                                   @keyup.enter="loginSubmit" />
                  </v-form>
               </v-card-text>

               <v-card-actions class="justify-center">
                  <v-btn color="primary"
                         @click="loginSubmit">
                     {{ $t("login.login") }}
                  </v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
      <div> {{ isAuth }}</div>
      <div class="text-light-blue">
         User: {{ user }}
      </div>
      <div> {{ userLogged }}</div>
   </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import { useAuth } from '@/store/auth';

const auth = useAuth();

const user = ref({
   email: 'xgotgot@gmail.com',
   password: 'matthieu'
});

const isAuth = ref('');
const userLogged = computed(() => auth.user);
const loginSubmit = async () => {
   isAuth.value = await auth.authenticate({
      strategy: 'local',
      email: user.value.email,
      password: user.value.password,
   });
};
</script>
