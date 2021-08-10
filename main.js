var FaceModel = Backbone.Model.extend({
  defaults: {
    sha: '',
    avatar: ''
  },

  urlRoot: 'https://api.github.com/repos/facebook/react/commits'
});

var FaceView = Backbone.View.extend({

  el: $('#container'),
  
  render: function () {
    this.$el.append("<h1>Test</h1>");
  },
  
  events: {
    'click #input-button': 'pullCollection',
  },

  pullCollection: function () {
    this.render();
  },
});

var faceModel = new FaceModel;
var faceView = new FaceView({model: faceModel});