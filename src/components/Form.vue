<template>
    <div>
      <h1>Form</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" />
        </div>
        <div>
          <label for="afbeeldingUrl">Afbeelding URL:</label>
          <input type="text" id="afbeeldingUrl" v-model="form.afbeeldingUrl" />
        </div>
        <div>
          <label for="beschrijving">Beschrijving:</label>
          <input type="text" id="beschrijving" v-model="form.beschrijving" />
        </div>
        <div>
          <label for="bouwjaar">Bouwjaar:</label>
          <input type="number" id="bouwjaar" v-model="form.bouwjaar" />
        </div>
        <div>
          <label for="capaciteit">Capaciteit:</label>
          <input type="number" id="capaciteit" v-model="form.capaciteit" />
        </div>
        <div>
          <label for="categorieid">Categorie ID:</label>
          <input type="number" id="categorieid" v-model="form.categorieid" />
        </div>
        <div>
          <label for="duur">Duur:</label>
          <input type="number" id="duur" v-model="form.duur" />
        </div>
        <div>
          <label for="locatie">Locatie:</label>
          <input type="text" id="locatie" v-model="form.locatie" />
        </div>
        <div>
          <label for="minimaleLengte">Minimale Lengte:</label>
          <input type="number" id="minimaleLengte" v-model="form.minimaleLengte" />
        </div>
        <div>
          <label for="onrideVideoUrl">Onride Video URL:</label>
          <input type="text" id="onrideVideoUrl" v-model="form.onrideVideoUrl" />
        </div>
        <div>
          <label for="populariteit">Populariteit:</label>
          <input type="number" id="populariteit" v-model="form.populariteit" />
        </div>
        <div>
          <label for="specialeEffecten">Speciale Effecten:</label>
          <input type="checkbox" id="specialeEffecten" v-model="form.specialeEffecten" />
        </div>
        <div>
          <label for="toegankelijkheidMinderValide">Toegankelijkheid Minder Valide:</label>
          <input type="checkbox" id="toegankelijkheidMinderValide" v-model="form.toegankelijkheidMinderValide" />
        </div>
        <div>
          <label for="wachttijd">Wachttijd:</label>
          <input type="number" id="wachttijd" v-model="form.wachttijd" />
        </div>
        <div>
          <button type="submit">Opslaan</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Form',
    data() {
      return {
        form: {
          name: '',
          afbeeldingUrl: '',
          beschrijving: '',
          bouwjaar: null,
          capaciteit: null,
          categorieid: null,
          duur: null,
          locatie: '',
          minimaleLengte: null,
          onrideVideoUrl: '',
          populariteit: null,
          specialeEffecten: false,
          toegankelijkheidMinderValide: false,
          wachttijd: null
        }
      };
    },
    methods: {
      submitForm() {
        fetch('http://localhost:8081/attracties/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    }
  };
  </script>
  