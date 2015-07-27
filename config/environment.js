'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    hello: {
      services: {
        // box: CLIENT_ID,
        // bikeindex: CLIENT_ID,
        // dropbox: CLIENT_ID,
        // facebook: CLIENT_ID,
        // foursquare: CLIENT_ID,
        // flickr: CLIENT_ID,
        // github: CLIENT_ID,
        // google: CLIENT_ID,
        // instagram: CLIENT_ID,
        // joinme: CLIENT_ID,
        // linkedin: CLIENT_ID,
        // soundcloud: CLIENT_ID,
        // tumblr: CLIENT_ID,
        // twitter: CLIENT_ID,
        // vk: CLIENT_ID,
        // windows: CLIENT_ID,
        // yahoo: CLIENT_ID
      },
      options: {
        // display: 'popup', //popup, page or none "popup" - as the name suggests, "page" - navigates the whole page, "none" - refresh the access_token in the background
        // scope: null, //string  email, publish or photos  Comma separated list of scopes
        // redirect_uri: window.location.href, //redirect.html A full or relative URI of a page which includes this script file hello.js
        // response_type: token, code Implicit (token) or Explicit (code) Grant flow 
        // force: null, //true, false or null (true) initiate auth flow and prompt for reauthentication where available. (null) initiate auth flow. (false) only prompt auth flow if the scopes have changed or the token expired.
        // popup: {resizable: 1, scrollbars: 1, width: 500, height: 550}
      }
    }
  };
};
