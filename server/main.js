import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Router.route('/hello', {where: 'server'})
  .get(function(){
    var response = {
      "error" : false,
      "message" : "Hello Friend!"
    };
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
  });