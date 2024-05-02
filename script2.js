(async function () {
    "use strict";

const resultContainerEl = document.querySelector(".my-container");
const name = prompt("Upisite ime drzave koju trazite: ");

const createCountryTemplate = (country) => {
  const countryTemplate = `
        <div class="country-holder">
            <h4>${country?.name?.common}</h4>
            <img src="${country?.flags?.png}" />
            <b>Capital city: </b> ${country?.capital[0]}
            <br>
            <b>Region: </b> ${country?.subregion}
        </div>
    `;

  return countryTemplate;
};

const renderCountryResult = (countryData) => {
  let countriesTemplate = "";
  countryData.forEach((country) => {
    const countryTemplate = createCountryTemplate(country);

    countriesTemplate += countryTemplate;
  });

  resultContainerEl.innerHTML = countriesTemplate;
};

try {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!response.ok) {
    console.log(response.status);
  }
  const countryData = await response.json();
  renderCountryResult(countryData);
} catch (error) {
  console.log("An error occurred:", error.message);
}
})();