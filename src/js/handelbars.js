import Handlebars from "handlebars";
import productsListTemplate from "bundle-text:../templates/products.hbs";
import countriesListTemplate from "bundle-text:../templates/countries-list.hbs";
import { products, countries } from "./data.js";

const productsContainer = document.querySelector(".container");
const countriesContainer = document.querySelector("[data-countries-container]");

const productsTemplate = Handlebars.compile(productsListTemplate);
const productsMurkup = productsTemplate(products);

productsContainer.insertAdjacentHTML("afterbegin", productsMurkup);

// markup countries
const countriesTemplate = Handlebars.compile(countriesListTemplate);
const markupCountries = countriesTemplate(countries);
countriesContainer.innerHTML += markupCountries;
