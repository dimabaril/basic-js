const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an domaindomainBackwardsArray of domains, return the object with the appearances of the DNS.
 *
 * @param {domaindomainBackwardsArray} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach((item) => {
    let domainBackwardsArr = item.split(".").reverse();
    let str = "";
    domainBackwardsArr.forEach((item) => {
      str += `.${item}`;
      if (result[str]) {
        result[str]++;
      } else {
        result[str] = 1;
      }
    });
  });
  return result;
}

module.exports = {
  getDNSStats,
};
