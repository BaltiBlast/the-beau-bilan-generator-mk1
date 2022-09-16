const app = {
  // ------------------------------------------------------------------
  // Datas
  data: data,
  selectedBilan: {},

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
    const bilanTypeSelect = document.getElementById("selectBilanType");

    for (let i = 0; i < data.length; i++) {
      // create option select
      let bilanTypeOption = document.createElement("option");

      // data option select
      bilanTypeOption.innerHTML = data[i].name;
      bilanTypeOption.setAttribute("value", data[i].name);

      // add option in select
      bilanTypeSelect.append(bilanTypeOption);
    }

    // onchange event on select
    bilanTypeSelect.addEventListener("change", (ele) => {
      // get value option
      let optionValue = ele.target.value;
      app.form.innerHTML = "";
      app.getBilan(optionValue)
    });
  },

  getBilan: async (bilanType) => {
    console.log("getBilan");
    app.selectedBilan = await data.find(bilan => bilan.name === bilanType)
    console.log(app.selectedBilan);
    app.createForm()
  },

  createForm: () => {
    let categories = app.selectedBilan.categories
    for (const categorie of categories) {
      let title = document.createElement("h3");
      title.innerText = categorie.name;
      app.form.append(title);
    }
  },

};

document.addEventListener("DOMContentLoaded", app.init());
