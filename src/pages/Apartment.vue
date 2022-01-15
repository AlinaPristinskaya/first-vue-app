<template>
  <main class="apartment-page">
    <SectionSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionSpacer>
  </main>
</template>

<script>
import Container from '../components/shared/Container';
//import apartments from '../components/apartments/apartment';
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue'
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue'
import Reviews from '../components/reviews'
import reviewsList from '../components/reviews/reviews.json'
import a from '../services/apartments.services'
import SectionSpacer from '../components/shared/form/SectionWidthHeaderSpacer.vue'



export default {
  name: 'ApartmentPage',
  components: {
      ApartmentsMainInfo,
      ApartmentsOwner,
      Container,
      Reviews,
      SectionSpacer

  },
  data(){
    return  {apartment:null}
  },
  computed:{
      reviewsList(){
          return reviewsList

      },
   /*    apartment(){
          return apartments.find(apartment =>apartment.id==this.$route.params.id)

  } */

  },
   async created(){
     const {id}=this.$route.params
     try{
    const {data} = await a.getApartmentById(id);
    this.apartment=data
   }catch(error){
     console.error(error)
   }   

  },
  mounted(){
      console.log(this.apartment)
  }
 
 
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>