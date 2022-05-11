import PropTypes from "prop-types";
import { capitalize, numberWithCommas } from "../utils";

function Country(props) {
  return (
    <div className="countries__country" data-testid="country">
      <div className="h-[250px] lg:h-[200px] w-full relative">
        <img
          src={props.country.flag}
          alt={props.country.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-1 mt-2">
        <div className="font-bold text-lg">
          {props.country.name && capitalize(props.country.name)}
        </div>
        <div className="text-sm">
          {props.country.population &&
            numberWithCommas(props.country.population)}
        </div>
        <div className="text-sm">{props.country.region}</div>
        <div className="text-sm">{props.country.capital}</div>
      </div>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
