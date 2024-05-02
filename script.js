(function () {
    "use strict";
  
    const resultContainerEl = document.querySelector(".my-container");
    const name = prompt("Input country name: ");
    const endpoint = `https://restcountries.com/v3.1/name/${name}`;
  
    fetch(endpoint, { method: "GET" })
      .then((data) => {
        data.json().then((formattedData) => {
          renderCountryResult(formattedData);
          console.log(formattedData);
        });
      })
      .catch((err) => {
        console.log("DESILA SE GRESKA");
      });
  
    function renderCountryResult(countryData) {
      let countriesTemplate = "";
      countryData.forEach((country) => {
        const countryTemplate = createCountryTemplate(country);
  
        countriesTemplate += countryTemplate;
      });
  
      resultContainerEl.innerHTML = countriesTemplate;
    }
  
    function createCountryTemplate(country) {
      const countryTemplate = `
          <div class="country-holder">
              <h4>${country.name.common}</h4>
              <img src="${country.flags.png}" />
              <b>Capital city: </b> ${country.capital[0]}
              <br>
              <b>Region: </b> ${country.subregion}
          </div>
      `;
  
      return countryTemplate;
    }
  })();
