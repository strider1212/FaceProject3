var FaceModel = Backbone.Model.extend({
  defaults: {
    sha: '',
    avatar: ''
  },

  urlRoot: 'https://api.github.com/repos/facebook/react/commits'
});

var FaceView = Backbone.View.extend({
  
  events: {
    'click #input-button': 'pullCollection',
  },

  pullCollection: function () {
    alert("clicked");
  },
});

var faceModel = new FaceModel;
var faceView = new FaceView({model: faceModel});