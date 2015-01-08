module.exports = function(Handlebars, getTemplate) {
  return {
    view: require('./helpers/view')(Handlebars),
    partial: require('./helpers/partial')(Handlebars, getTemplate),
    json: require('./helpers/json')(Handlebars),
    each: require('./helpers/each')(Handlebars),
    forEach: require('./helpers/forEach')
  };
};
