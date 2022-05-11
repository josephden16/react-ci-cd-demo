import PropTypes from "prop-types";
import Country from "./Country";

function Countries(props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10"
      data-testid="countries"
    >
      {props.countries &&
        props.countries.map((country, index) => {
          return <Country country={country} key={index} />;
        })}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default Countries;
