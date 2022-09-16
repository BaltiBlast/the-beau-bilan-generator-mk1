const sideBar = {
  // ------------------------------------------------------------------------------------
  // Datas
  data: data,
  selectedBilan: {},

  // ------------------------------------------------------------------------------------
  // Dom element
  appContainer: document.getElementById("app"),
  form: document.getElementById("categorieBilan"),

  // ------------------------------------------------------------------------------------
  // Methods
  init: () => {
    sideBar.createBilanTypeSelect();
  },

  // ------------------------------------------------------------------------------------
  createBilanTypeSelect: () => {
    // == DOM Element == //
    const selectBilanType = document.getElementById("selectBilanType");

    // Add options in <select id="selectBilanType">
    for (let i = 0; i < data.length; i++) {
      // == DOM Element == //
      // option & attributs
      let bilanTypeOption = document.createElement("option");
      bilanTypeOption.innerHTML = data[i].name;
      bilanTypeOption.setAttribute("value", data[i].name);

      // DOM injection
      selectBilanType.append(bilanTypeOption);
    }

    // onchange event on select ( selectBilanType )
    selectBilanType.addEventListener("change", sideBar.selectBilanType);
  },

  // ------------------------------------------------------------------------------------
  selectBilanType: (event) => {
    // get value option
    let optionValue = event.target.value;
    sideBar.form.innerHTML = "";
    sideBar.getBilan(optionValue);
  },

  // ------------------------------------------------------------------------------------
  getBilan: (bilanType) => {
    // Find selected bilan
    sideBar.selectedBilan = data.find((bilan) => bilan.name === bilanType);
    sideBar.createForm(bilanType);
  },

  // ------------------------------------------------------------------------------------
  createForm: (bilanType) => {
    let categories = sideBar.selectedBilan.categories;
    const categorieContainer = document.createElement("div");

    for (const categorie of categories) {
      let title = document.createElement("h3");
      let levelInputContainer = document.createElement("div");
      title.innerText = categorie.name;

      categorieContainer.append(title);
      //   CONDITION TEMPORAIRE
      if (bilanType === "Fin de formation") {
        for (let i = 0; i < categorie.levels.length; i++) {
          // == DOM element == //
          // input & attributs & event
          let levelInput = document.createElement("input");
          levelInput.value = i + 1;
          levelInput.name = "level";
          levelInput.type = "radio";
          levelInput.addEventListener("click", (e) => {
            sideBar.getInputValue(e, title);
          });

          // label & text
          let levelInputLabel = document.createElement("label");
          levelInputLabel.innerText = i + 1;

          //   DOM injection
          levelInputLabel.appendChild(levelInput);
          levelInputContainer.appendChild(levelInputLabel);

          //   AJOUTER TITLE ICI APRÈS SUPPRESSION DE LA CONDITION
          categorieContainer.append(levelInputContainer);
        }
      }
      sideBar.form.appendChild(categorieContainer);
    }
  },

  // ------------------------------------------------------------------------------------
  getInputValue: (e, categorieTitle) => {
    const submitForm = document.getElementById("submitForm");

    console.log(e.target.value, categorieTitle);
  },
};
