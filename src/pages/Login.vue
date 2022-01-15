<template>
  <main class="login">
    <AuthSection>
      <Login />
    </AuthSection>
  </main>
</template>

<script>
import Login from '../components/auth/login/LoginForm.vue';
import AuthSection from '../components/auth/AuthSection.vue'

export default {
  name: 'LoginPage',
  components: {
    Login,
    AuthSection
   
  },
};
</script>

<style lang="scss" scoped></style>