# Ember-cli-hello
An ember-cli addon for the hello.js client-side authentication library.

## What is hello.js?

From hello.js homepage http://adodson.com/hello.js:

> A client-side JavaScript SDK for authenticating with OAuth2 (and OAuth1 with a oauth proxy) web services and querying their
> REST APIs. HelloJS standardizes paths and responses to common APIs like Google Data Services, Facebook Graph and Windows Live > Connect. It's modular, so that list is growing. No more spaghetti code!

## Installation

In your ember-cli project directory, run:

`npm install ember-cli-hello --save-dev`

## Configuration

In your project's `environment.js` file add the client id for the services you want and any global options that will be passed into the `hello.login` method. As in http://adodson.com/hello.js/#helloinit

```
# config/environment.js
...
  APP: {
    hello: {
      services: {
        facebook: YOUR-FB-APP-ID
      },
      options: {
        scope: 'email'
      }
    }
  }
...
```

## TODO
* Only load service libraries that you've included in the config instead of loading hello.all
* Add basic auth event handlers to initializer?
* Make compatible with older versions of ember-cli?

