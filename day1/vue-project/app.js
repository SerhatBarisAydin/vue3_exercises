const app = Vue.createApp({
  data() {
    return {
      Informations: [
        { name: "" },
        { surname: "" },
        { birthday: Number },
        { department: "" },
        { gender: "" },
      ],

      isEmpty: true,
    };
  },

  methods: {
    /* 
        emptyArea(variable){


            this.varName = document.getElementById("${variable}").value;

            if (this.varName === " ") {
                alert("geçerli bir değer giriniz");
            }


        }, */

    giveAlert() {
      alert();
    },

    takeInformations() {
      this.name = document.getElementById("getName").value;
      this.surname = document.getElementById("getSurname").value;
      this.birthday = document.getElementById("birthdate").value;
      this.department = document.getElementById("departmentName").value;
      this.gender = document.getElementById("gender").value;

      for (let i = 0; i < this.Informations.length; i++) {
        const element = this.Informations[i];

        console.log(element.value);
        /* 
                if (element = " ") {
                    
                    alert();
                }else{
                    continue;
                } */
      }

      console.log(
        "Name: " +
          this.name +
          "\n" +
          "Surname: " +
          this.surname +
          "\n" +
          "Birthdate: " +
          this.birthday +
          "\n" +
          "Department :" +
          this.department +
          "\n" +
          "Gender: " +
          this.gender
      );
    },
  },
}).mount("#app");
