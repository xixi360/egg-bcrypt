'use strict';

const bcrypt = require('bcryptjs');

module.exports =  {
  genHash(plainText) {
    return bcrypt
      .hash(plainText, this.config.bcrypt.saltRounds)
      .catch(err => this.logger.error('[egg-bcrypt]', err));
  },
  compareHash(plainText, hash) {
    return bcrypt
      .compare(plainText, hash)
      .catch(err => this.logger.error('[egg-bcrypt]', err));
  },
};
