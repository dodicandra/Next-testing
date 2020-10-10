const pt = require('path');

module.exports = {
  sassOptions: {
    includePaths: [pt.join(__dirname, 'styles')],
  },
};
