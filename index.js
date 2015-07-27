/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-hello',
  
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/hello/dist/hello.all.js');
  },

  afterInstall: function(app) {
    this._super.afterInstall(app);

    this.insertIntoFile('.jshintrc', '    "hello",', {
      after: '"predef": [\n'
    });

    return this.insertIntoFile('.gitignore');
  }
};
