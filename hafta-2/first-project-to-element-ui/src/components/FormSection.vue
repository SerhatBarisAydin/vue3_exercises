<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="getInfoContainer">
          <div id="getInfo">
            <p>isim:</p>

            <!-- <inputComponent @nameInputChange="handleNameChange" /> -->
          </div>

          <div id="getInfo">
            <p>soyisim:</p>

            <!-- <inputComponent @surnameInputChange="handleSurnameChange" /> -->
          </div>

          <div id="getBirthDate">
            <p>Doğum tarihiniz:</p>
            <!-- <dateComponent @dateChange="handleDateChange" /> -->
          </div>
        </div>

        <div class="getDepartment">
          <div class="getDepartmentName">
            <p>Bulunduğunuz departmani seçiniz:</p>
            <!-- <selectComponent @selectChange="handleSelectChange" /> -->
          </div>

          <div class="getGender">
            <p>select your gender:</p>
            <!-- <radioButtonComponent @genderChange="handleGenderChange" /> --> 
          </div>
        </div>

        <div class="submit">
          <!-- <buttonComponent @buttonClick="clickHandlerButton" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import inputComponent from "./inputComponent.vue"; */
/* import dateComponent from "./dateComponent.vue"; */
/* import radioButtonComponent from "./radioButtonComponent.vue"; */
/* import selectComponent from "./selectComponent.vue"; */
/* import buttonComponent from "./buttonComponent.vue"; */
export default {
   components: {
    /* inputComponent, */
    /* dateComponent, */
    /* radioButtonComponent, */
    /* selectComponent, */
    /* buttonComponent,  */
  }, 

  data() {
    return {
      receivedDataFromName: "",
      receivedDataFromSurname: "",
      receivedDataFromDate: "",
      receivedDataFromGender: "",
    };
  },

  methods: {
    handleSelectChange(value) {
      this.receivedDataFromSelect = value;
    },

    handleGenderChange(value) {
      this.receivedDataFromGender = value;
    },

    handleDateChange(value) {
      this.receivedDataFromDate = value;
    },

    handleSurnameChange(value) {
      this.receivedDataFromSurname = value;
    },

    handleNameChange(value) {
      this.receivedDataFromName = value;
    },
    clickHandlerButton() {
      console.log(
        "isim: " +
          this.receivedDataFromName +
          "\n" +
          "soyisim: " +
          this.receivedDataFromSurname +
          "\n" +
          "Doğum Tarihi: " +
          this.receivedDataFromDate +
          "\n" +
          "departman: " +
          this.receivedDataFromSelect +
          "\n" +
          "cinsiyet: " +
          this.receivedDataFromGender
      );
    },
  },
};
</script>
