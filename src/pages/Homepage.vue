<template>
  <div id="app">
    <main class="homepage">
   <SectionSpacer>
    <Container>
     <ApartmentsFilterForm @submit="filter"/>  
    </Container>
    <Container>
    <p v-if="!filteredApartments.length">Ничего не найденно</p>  
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{apartment}">
    <ApartmentsItem
  
  :id="apartment.id"
  :descr="apartment.descr"
  :imgSrc="apartment.imgUrl"
  :rating="apartment.rating"
  :price="apartment.price"
  /></template>
      
    </ApartmentsList>
    </Container>
   </SectionSpacer>
  

    </main></div>
    
</template>

<script>
import ApartmentsList from '../components/apartments/ApartmentsList.vue'
import ApartmentsItem from'../components/apartments/ApartmentsItem.vue'
//import apartments from '../components/apartments/apartment'
import ApartmentsFilterForm from'../components/apartments/ApartmentsFilterForm.vue'
import Container from '../components/shared/Container.vue'
import a from '../services/apartments.services'
import SectionSpacer from '../components/shared/form/SectionWidthHeaderSpacer.vue'



export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
    SectionSpacer,
        
   },
   computed:{
     filteredApartments(){
       return  this.filterByPrice(this.filterByCityName(this.apartments))
     }
    
  },
  data(){
    return {
      text:'',
      apartments:[],
      filters:{
        city:'',
        price:0
      }
      }
  },
 async created(){
     try{
    const {data} = await a.getApartmentsList();
    this.apartments=data
   }catch(error){
     console.error(error)
   }   

  },
  methods:{
    filter({city,price}){
      this.filters.city=city
      this.filters.price=price

    },
    filterByCityName(apartments){
      if(!this.filters.city){
        return apartments
      }
      return this.apartments.filter(apartmen=>{
        return apartmen.location.city===this.filters.city
      })
    },
    filterByPrice(apartments){
       if(!this.filters.price){
        return apartments
      }
      return this.apartments.filter(apartmen=>{
        return apartmen.price>=this.filters.price
      })
    }

  }
 }

</script>

<style>

.apartment-filter{
  margin-bottom: 40px;
}
</style>