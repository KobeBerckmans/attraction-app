<template>
    <div>
      <h2 v-if="attraction.attractieID">Edit Attraction</h2>
      <h2 v-else>Add Attraction</h2>
      <form @submit.prevent="saveAttraction">
        <input type="text" v-model="attraction.name" placeholder="Name" required />
        <input type="text" v-model="attraction.categorieID" placeholder="CategorieID" required />
        <input type="number" v-model="attraction.capaciteit" placeholder="Capaciteit" required />
        <input type="number" v-model="attraction.bouwjaar" placeholder="Bouwjaar" required />
        <input type="text" v-model="attraction.afbeeldingUrl" placeholder="Afbeelding URL" required />
        <input type="text" v-model="attraction.onrideVideoUrl" placeholder="Onride Video URL" required />
        <input type="text" v-model="attraction.duur" placeholder="Duur" required />
        <input type="text" v-model="attraction.populariteit" placeholder="Populariteit" required />
        <input type="number" v-model="attraction.minimaleLengte" placeholder="Minimale Lengte" required />
        <input type="checkbox" v-model="attraction.toegankelijkheidMinderValide" /> Toegankelijkheid Minder Valide
        <input type="text" v-model="attraction.wachttijd" placeholder="Wachttijd" required />
        <input type="text" v-model="attraction.specialeEffecten" placeholder="Speciale Effecten" required />
        <textarea v-model="attraction.beschrijving" placeholder="Beschrijving"></textarea>
        <input type="text" v-model="attraction.locatie" placeholder="Locatie" required />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import AttractionService from '../services/AttractionService'
  
  export default {
    data() {
      return {
        attraction: {
          attractieID: null,
          name: '',
          categorieID: '',
          capaciteit: 0,
          bouwjaar: 0,
          afbeeldingUrl: '',
          onrideVideoUrl: '',
          duur: '',
          populariteit: '',
          minimaleLengte: 0,
          toegankelijkheidMinderValide: false,
          wachttijd: '',
          specialeEffecten: '',
          beschrijving: '',
          locatie: ''
        }
      }
    },
    methods: {
      setAttraction(attraction) {
        this.attraction = { ...attraction }
      },
      saveAttraction() {
        if (this.attraction.attractieID) {
          AttractionService.updateAttraction(this.attraction.attractieID, this.attraction).then(() => {
            this.$emit('attraction-saved')
            this.resetForm()
          })
        } else {
          AttractionService.createAttraction(this.attraction).then(() => {
            this.$emit('attraction-saved')
            this.resetForm()
          })
        }
      },
      resetForm() {
        this.attraction = {
          attractieID: null,
          name: '',
          categorieID: '',
          capaciteit: 0,
          bouwjaar: 0,
          afbeeldingUrl: '',
          onrideVideoUrl: '',
          duur: '',
          populariteit: '',
          minimaleLengte: 0,
          toegankelijkheidMinderValide: false,
          wachttijd: '',
          specialeEffecten: '',
          beschrijving: '',
          locatie: ''
        }
      }
    }
  }
  </script>
  