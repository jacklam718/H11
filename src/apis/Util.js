// @flow

import _ from 'lodash';

const countryCodes = require('../seedData/country_codes.json');

const Util = {
  getCountryByPhoneNumber: (phoneNumber: string) => {
    let countryName;
    _.forEach(countryCodes, (countryCode, countryKey) => {
      if (phoneNumber.includes(countryCode)) {
        countryName = countryKey;
      }
    });
    return countryName;
  },
};

export default Util;
