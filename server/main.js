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
      "text": "Ho Ho Ho! Merry Christmas "  + this.request.body.user_name + "!\n" +
        "It's such a pleasure to hear from someone who makes the nice list year after year! Let's see, how are you doing this year?\n...\n...\n" +
        "Ah. Ahem, um... I don't know how to tell you this, but it seems like you may have... slipped... a bit this year. I seem to have you on the, well, the naughty list!\n" +
        "Fear not though, fear not. There's still time, we can fix this! But I'm going to need you to prove your dedication.\n\n" +
        "I have a series of puzzles that need solving. The more you solve, the further up the list you'll go, and the more gifts you'll receive. And I see you've already completed " +
        "your first, jolly good! After each puzzle is solved, I'll be directing you to a gift and providing you the key to the next puzzle. Upon solving all of the puzzles, you'll receive " +
        "your final treat. And more importantly, a spot on the nice list!\n\nAll you have to do is continue communicating with me here. For example, send me the command '/q1' to here the first " +
        "riddle. Once solved, respond with command '/a1 solution' and, if correct, I'll provide you the location of your treat and the key to the next question! It's really that simple!\n",
      "attachments" :
        [
          { "text": "The office closet contains a treat! Enjoy it wisely now. Send command /q1 to continue..." }
        ]
    };
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
 });

Router.route('/q1', {where: 'server'})
  .post(function(){

    var response = {
      "text": "A riddle you seek! Pay close attention... These words, they all seem to be related to Christmas! But that doesn't seem to be all they have in common...\nHmmm... Maybe they're trying to tell us something?\n\n" +
      "Candy\nToboggan\nNorth Pole\nLuminosity\nEbenezer\nIce Dance\nStocking\nInclude\n",
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