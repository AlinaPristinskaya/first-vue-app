<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Логин</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
       :rules="passwordRules"
        class="login__input"
      />
      <Button class="login__btn" type="bsubmit" :loading="loading">Вход</Button>
    </Form>
  </AuthContainer>
</template>


<script>
import Form from '../../shared/form/Form.vue'
import CustomInput from '../../shared/CustomInput.vue'
import Button from '../../shared/Button.vue'
import {emailValidation, passwordValidation, isRequired} from '../../../utils/validationRules'
import AuthContainer from '../AuthContainer.vue'
import MainTitle from '../../shared/MainTitle.vue'

    export default {
        name:'LoginForm',
        components:{
            Form,
            CustomInput,
            Button,
            AuthContainer,
            MainTitle
            
        },
        data() {
          return {
            loading:false,
        formData: {
          email: '',
          password: '',
      },
    };
  },
  computed:{
    rules(){
      return {
        emailValidation, passwordValidation, isRequired
      }
    },
    emailRules(){
      return [this.rules.isRequired, this.rules.emailValidation]
    },
    passwordRules(){
      return [this.rules.isRequired]
    }

  },
   methods: {
   async handleSubmit(){
      const {form}=this.$refs
      const isFormValidate=form.validate()
      if(isFormValidate){
        try{
          this.loading=true          
         await this.$store.dispatch('setUserData',this.formData)          
          this.$router.push({name:'homepage'})
          form.reset()
        }catch(error){
                  this.$notify({
  type:'error',
  title: 'Произошла ошибка',
  text: error.message
});
        }finally{
          this.loading=false
        }
        
        
      }
     
  
    }
  },
    }
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>