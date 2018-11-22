import {Countries} from "../../config/countries";

class CountriesHelper {
    /**
     * Returns the country data for a contry code, if the country code doesnt match with a country on the object,
     * it returns false
     * @param countryCode
     * @returns {boolean}
     */
    static getCountryByCode(countryCode){
        Object.keys(Countries).forEach((key) => {
            if(Countries[key].dialect === countryCode) return Countries[key];
        });
        return false;
    }

    /**
     * Returns the country data for a country key, if the key has an undefined value, it returns false
     * @param country
     * @returns {*|boolean}
     */
    static getCountry(country){
        return Countries[country] || false;
    }
}

export default CountriesHelper;