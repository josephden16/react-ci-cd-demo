import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { numberWithCommas } from "../utils.js";


function Detail() {
  const { code } = useParams();
  const [data, setData] = useState([]);

  let history = useHistory();

  const back = () => history.goBack();

  function composeArr(array, key) {
    let arr = [];
    array.forEach((elm) => {
      arr.push(elm[key]);
    })
    return arr;
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      setData(res.data);
    }
    fetchData();
  }, [data, code])

  return (
    <div className="detail">
      <div className="detail__back">
        <button className="detail__back__backBtn" onClick={back}>Back</button>
      </div>
      <div className="detail__container">
        <div className="detail__container__flag">
          <img alt={data.name} className="detail__container__flag__img" src={data.flag} />
        </div>
        <div className="detail__container__content">
          <h1 className="detail__container__content__name">{data.name}</h1>
          <div className="detail__container__content__info">
            <div className="detail__container__content__info__col">
              <div><span className="bold">Native Name:</span> {data.nativeName}</div>
              <div><span className="bold">Population:</span> {data.population && numberWithCommas(data.population)}</div>
              <div><span className="bold">Region:</span> {data.region}</div>
              <div><span className="bold">Sub Region:</span> {data.subregion}</div>
              <div><span className="bold">Capital:</span> {data.capital}</div>
            </div>
            <div className="detail__container__content__info__col">
              <div><span className="bold">Top Level Domain:</span> {data.topLevelDomain && data.topLevelDomain.toString()}</div>
              <div><span className="bold">Native Name: </span> {data.nativeName}</div>
              <div><span className="bold">Currencies: </span>{data.currencies && composeArr(data.currencies, "code").toString()}</div>
              <div><span className="bold">Languages: </span>{data.languages && composeArr(data.languages, "name").toString()}</div>
            </div>
          </div>
          <div className="detail__container__borders">
            Border Countries: {
              data.borders && data.borders.map((border, index) => {
                return (
                  <Link key={index} className="detail__container__borders__border" to={"/" + border}>
                    {border}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
