const app = {
  // ------------------------------------------------------------------
  // Datas
  bilanApo: bilanApo,

  // ------------------------------------------------------------------
  // Dom element
  appContainer: document.getElementById("app"),

  // ------------------------------------------------------------------
  // Methods
  init: () => {
    console.log("app init ok ");
  },


  
  getBilanType: (e) => {
    const bilanType = e.target.value
    console.log(bilanType);
  },
};

document.addEventListener("DOMContentLoaded", app.init());
