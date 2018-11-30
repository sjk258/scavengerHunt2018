import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
  extended: false
}));

Router.route('/intro', {where: 'server'})
  .post(function(){

    var response = {
      "text": "Meet Santa Clause! (basically)" + this.request.body.user_name,
      "attachments" :
        [
          { "text": "Ho Ho Ho!" }
        ]
    };
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
 });

Router.route('/q1', {where: 'server'})
  .post(function(){

    var response = {
      "text": "A riddle you seek! Pay close attention... These words, they all seem to be related to Christmas! But that doesn't seem to be all they have in common...\nHmmm... Maybe they're trying to tell us something?\n" +
      "Candy\nToboggan\nNorth Pole\nLuminosity\nEbenezer\nIce Dance\nStocking\nInclude",
      "attachments" :
      [
        { 
          "title": "Hint",
          "text": "To what do you strive?" 
        }
      ]
    };

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
  });