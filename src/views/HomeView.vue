<script setup lang="ts">
import { ref } from 'vue'
import FormUsername from '@/components/form/username/index.vue'
import FormUserEmail from '@/components/form/email/index.vue'
import FormReview from '@/components/form/review/index.vue'
import Success from '@/components/success/index.vue'
import { UserInput } from '@/types/user.type';

const userInfo = ref<UserInput>({
  username: '',
  email: ""
})

const step = ref<'email' | 'username' | 'review'>('username')
</script>

<template>
  <main>
    <div class="">
      <FormUsername v-model="userInfo" v-model:step="step" v-if="step === 'username'" />
      <FormUserEmail v-model="userInfo" v-model:step="step" v-else-if="step === 'email'" />
      <FormReview v-model="userInfo" v-else-if="step === 'review'" v-model:step="step" />
    </div>
  </main>
</template>
