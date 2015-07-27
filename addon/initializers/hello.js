export function initialize(registry, application) {
  var helloConfig = application.get('hello');
  hello.init(helloConfig.services, helloConfig.options);
}

export default {
  name: 'hello',
  initialize: initialize
};
