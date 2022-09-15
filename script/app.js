const app = {
  // ------------------------------------------------------------------
  // Datas
  data: data,

  // ------------------------------------------------------------------
  // Dom element
  appContainer: document.getElementById("app"),

  // ------------------------------------------------------------------
  // Methods
  init: () => {
    console.log(app.data);
    app.getBilanType();
  },

  getBilanType: () => {
    // Dom element
    const categorieBilanContainer = document.getElementById("categorieBilan");

    // Option in selectBilanType
    for (const bilan of data) {
      let optionBilanType = document.createElement("option");
      optionBilanType.innerText = bilan.name;

      bilan.categories.forEach((e) => {
        let bilanInputCategorie = document.createElement("h3");
        bilanInputCategorie.innerText = e.name
        categorieBilanContainer.append(bilanInputCategorie);
      });

      selectBilanType.append(optionBilanType);
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init());
