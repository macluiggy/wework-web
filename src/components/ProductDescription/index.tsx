import React, { useState } from "react";
import "./ProductDescription.css";

const ProductDescription = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");

  const countries = [
    {
      name: "Estados Unidos",
      provinces: ["California", "Nueva York", "Florida"],
    },
    {
      name: "México",
      provinces: ["Ciudad de México", "Jalisco", "Quintana Roo"],
    },
    { name: "España", provinces: ["Madrid", "Barcelona", "Valencia"] },
  ];

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedProvince("");
  };

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <div className="product-description">
      <div className="product-description__text">
        <h2>Para todas tus formas de trabajo, estamos aquí</h2>
        <p>
          Encuentra una ubicación cerca de ti. Explora las membresías y las
          oficinas listas para mudarse para particulares o empresas de todos los
          tamaños.
        </p>
      </div>
      <div className="product-description__dropdown">
        <label htmlFor="countries">Selecciona un país:</label>
        <select
          id="countries"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Selecciona un país</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {selectedCountry && (
          <div>
            <label htmlFor="provinces">Selecciona una provincia:</label>
            <select
              id="provinces"
              value={selectedProvince}
              onChange={handleProvinceChange}
            >
              <option value="">Selecciona una provincia</option>
              {countries
                .find((country) => country.name === selectedCountry)
                ?.provinces.map((province, index) => (
                  <option key={index} value={province}>
                    {province}
                  </option>
                ))}
            </select>
          </div>
        )}
        <button className="product-description__button">Comenzar</button>
      </div>
      <div className="product-description__image">
        <img
          src="https://ctfassets.imgix.net/vh7r69kgcki3/4UNxBx8yNR0ytwJgT3c1s2/1a67973b5cb22cbcf6e5f7f517bacec6/Web_150DPI-WeWork-167_North_Green_Reshoot-7.jpg?auto=format%20compress&fit=crop&q=50&w=1200&h=675"
          alt="Product"
        />
      </div>
    </div>
  );
};

export default ProductDescription;
