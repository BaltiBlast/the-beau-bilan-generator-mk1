const app = {
  // ------------------------------------------------------------------
  // Datas
  data: data,

  // ------------------------------------------------------------------
  // Dom element
  appContainer: document.getElementById("app"),
  form: document.getElementById("categorieBilan"),

  // ------------------------------------------------------------------
  // Methods
  init: () => {
    app.getBilanType();
  },

  getBilanType: () => {
    const categorieBilanContainer = document.getElementById("selectBilanType");

    for (let i = 0; i < data.length; i++) {
      // create option select
      let optionBilanName = document.createElement("option");

      // data option select
      optionBilanName.innerHTML = data[i].name;
      optionBilanName.setAttribute("value", data[i].name.toLowerCase());

      // add option in select
      categorieBilanContainer.append(optionBilanName);
    }

    // onchange event on select
    categorieBilanContainer.addEventListener("change", (ele) => {
      // get value option
      let optionValue = ele.target.value;

      // returning form by value
      switch (optionValue) {
        case "fondations":
          app.form.innerHTML = ""
          app.fondationsForm();
          break;

        case "approfondissement":
          app.form.innerHTML = ""
          app.approfondissementForm();
          break;

        case "apothéose":
          app.form.innerHTML = ""
          console.log("switch apothéose");
          break;

        case "fin de formation":
          app.form.innerHTML = ""
          console.log("switch fin de forma");
          break;

        default:
          console.log("switch y a R ");
      }
    });
  },

  fondationsForm: () => {
    const dataFondations = data.slice(0, 1);

    dataFondations.forEach((element) => {
      for (const categorie of element.categories) {
        let title = document.createElement("h3");
        title.innerText = categorie.name;
        app.form.append(title);
      }
    });
  },

  approfondissementForm: () => {
    const dataApprofondissement = data.slice(1, 2);
    dataApprofondissement.forEach((element) => {
      for (const categorie of element.categories) {
        let title = document.createElement("h3");
        title.innerText = categorie.name;
        app.form.append(title);
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init());
