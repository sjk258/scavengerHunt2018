import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Router.route('/intro', {where: 'server'})
  .post(function(){
    var response = {
      "text": "Meet Santa Clause! (basically)",
      "attachments" : {
        "text": "Ho Ho Ho!"
      }
    };
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
  });