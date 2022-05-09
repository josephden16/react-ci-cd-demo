import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { capitalize, numberWithCommas } from "../utils.js";
import "../scss/Home.scss";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get("https://restcountries.eu/rest/v2/all")
      setCountries(results.data);
    }
    fetchData()
  }, []);
  const handleInput = (evt) => {
    let val = evt.target.value;
    setSearch(val);
  }

  const handleSelect = (evt) => {
    let val = evt.target.value;
    setContinent(val);
  }

  return (
    <div className="home">
      <InputContainer handleInput={handleInput} handleSelect={handleSelect} />
      <Countries search={search} selectedContinent={continent} countries={countries} />
    </div>
  )
}

function InputContainer(props) {
  return (
    <div className="inputContainer">
      <div className="inputContainer__search">
        <input
          className="inputContainer__search__textfield"
          placeholder="Search for a country..."
          onInput={props.handleInput}
        />
      </div>
      <div className="inputContainer__filter">
        <select onChange={props.handleSelect} className="inputContainer__filter__dropDown" name="continent">
          <option value="" defaultValue>Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

function Countries(props) {

  function computedCountries() {
    let arr = props.countries;
    let search = capitalize(props.search);
    if (props.search) {
      arr = arr.filter(country => country.name.indexOf(search) > -1)
      return arr;
    } else if (props.selectedContinent) {
      arr = arr.filter(country => country.region === props.selectedContinent);
      return arr;
    } else if (props.selectedContinent && props.search) {
      arr = arr.filter(country => country.region === props.selectedContinent &&
        country.name.indexOf(search) > -1)
      return arr;
    } else {
      return arr;
    }
  }


  return (
    <div className="countries">
      {
        computedCountries().map((country, index) => {
          return (
            <Country country={country} key={index} />
          )
        }
        )
      }
    </div>
  )
}

function Country(props) {
  return (
    <div className="countries__country">
      <div className="countries__country__flag">
        <Link to={"/" + props.country.alpha3Code}>
          <img src={props.country.flag} alt={props.country.name} />
        </Link>
      </div>
      <div className="countries__country__name">{props.country.name && capitalize(props.country.name)}</div>
      <div className="countries__country__detail">{props.country.population && numberWithCommas(props.country.population)}</div>
      <div className="countries__country__detail">{props.country.region}</div>
      <div className="countries__country__detail">{props.country.capital}</div>
    </div>
  )
}

export default Home;
