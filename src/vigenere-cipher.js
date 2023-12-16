const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isBackwards = true) {
    this.isBackwards = isBackwards;
  }

  encrypt(string, key) {
    return this.process(string, key, true);
  }

  decrypt(string, key) {
    return this.process(string, key, false);
  }

  process(string, key, isEncrypt) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    string = string.toUpperCase();
    key = this.generateKey(string, key);
    let result = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[A-Z]/)) {
        const stringChar = string.charCodeAt(i) - 65;
        const keyChar = key.charCodeAt(i) - 65;

        let processedChar;
        if (isEncrypt) {
          processedChar = ((stringChar + keyChar) % 26) + 65;
        } else {
          processedChar = ((stringChar - keyChar + 26) % 26) + 65;
        }

        result += String.fromCharCode(processedChar);
      } else {
        result += string[i];
      }
    }
    return this.isBackwards ? result : result.split("").reverse().join("");
  }

  generateKey(string, key) {
    const keyLength = key.length;
    let generatedKey = "";
    for (let i = 0, j = 0; i < string.length; i++) {
      if (string[i].match(/[A-Z]/)) {
        generatedKey += key[j % keyLength].toUpperCase();
        j++;
      } else {
        generatedKey += string[i];
      }
    }
    return generatedKey;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
