<template>
    <div>
      <h1>Attractions</h1>
      <ul>
        <li v-for="attraction in attractions" :key="attraction.attractieID">
          {{ attraction.name }} - {{ attraction.categorieID }} - {{ attraction.capaciteit }} - {{ attraction.bouwjaar }} - {{ attraction.afbeeldingUrl }} - {{ attraction.onrideVideoUrl }} - {{ attraction.duur }} - {{ attraction.populariteit }} - {{ attraction.minimaleLengte }} - {{ attraction.toegankelijkheidMinderValide }} - {{ attraction.wachttijd }} - {{ attraction.specialeEffecten }} - {{ attraction.beschrijving }} - {{ attraction.locatie }}
          <button @click="editAttraction(attraction)">Edit</button>
          <button @click="deleteAttraction(attraction.attractieID)">Delete</button>
        </li>
      </ul>
      <AttractionForm @attraction-saved="fetchAttractions"/>
    </div>
  </template>
  
  <script>
  import AttractionService from '../services/AttractionService'
  import AttractionForm from './AttractionForm'
  
  export default {
    components: {
      AttractionForm
    },
    data() {
      return {
        attractions: []
      }
    },
    created() {
      this.fetchAttractions()
    },
    methods: {
      fetchAttractions() {
        AttractionService.getAllAttractions().then(response => {
          this.attractions = response.data
        })
      },
      editAttraction(attraction) {
        this.$refs.attractionForm.setAttraction(attraction)
      },
      deleteAttraction(id) {
        AttractionService.deleteAttraction(id).then(() => {
          this.fetchAttractions()
        })
      }
    }
  }
  </script>
  