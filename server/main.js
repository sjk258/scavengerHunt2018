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

Router.route('/a1', {where: 'server'})
  .post(function(){
    var answer = this.request.body.text.toLowerCase().trim();
    var response = undefined;

    if (answer.includes("nice") && answer.includes("list")) {
      response = {
        "text": "You did it! The answer was 'NICE LIST'\nCongratulations on this amazing feat! If you check your bed-side cabinet, you'll find a delightful reward! Enjoy, you've earned it.",
        "attachments" :
        [
          { "text": "To continue to riddle 2, use command '/q2 bojangles'" }
        ]
      };
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/q2', {where: 'server'})
  .post(function(){
    var key = this.request.body.text.toLowerCase().trim();
    var response = undefined;

    if (key.includes("bojangles")) {
      response = { 
        "text": "Not bad, not bad, now a little less obvious I think! What do you make of this?\n" +
          "5-533-9-22\n3-389-23-8\n4-302-20-4\n6-242-8-16\n7-28-1-9",
        "attachments" :
        [
          {
            "title": "Hint",
            "text": "With an aunt and uncle like that, I'd not want to spend Christmas with family either..."
          }
        ]
      }
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/a2', {where: 'server'})
  .post(function(){
    var answer = this.request.body.text.toLowerCase().trim();
    var response = undefined;

    if (answer.includes("merry")) {
      response = {
        "text": "Wonderful! Harry Potter, a favorite, hid the secret the whole time. And you figured it out! Bravo, bravo. There's a blue backpack containing a prize. I'd hurry to check it if I were you!",
        "attachments" :
        [
          { "text": "To continue to riddle 3, use command '/q3 rudolph'" }
        ]
      };
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/q3', {where: 'server'})
  .post(function(){
    var key = this.request.body.text.toLowerCase().trim();
    var response = undefined;

    if (key.includes("rudolph")) {
      response = { 
        "text": "Well I hope you enjoyed your break! It's time to jump right back into the thick of it now though. And worry not! This is a simple one:\n344664",
        "attachments" :
        [
          {
            "title": "Hint",
            "text": "If you're struggling, try phoning a friend."
          }
        ]
      }
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/a3', {where: 'server'})
  .post(function(){
    var answer = this.request.body.text.toLowerCase().trim();
    var response = undefined;

    if (answer.includes("eggnog")) {
      response = { 
        "text": "You did it! I knew you could. But no, the prize is actually NOT eggnog (shocker)! If you want to see what it is, I'd check the garage. That cooler has got your NAME on it! ;)",
        "attachments" :
        [
          {
            "text": "To continue to riddle 4, use command '/q4 december'"
          }
        ]
      }
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/q4', {where: 'server'})
  .post(function(){
    var key = this.request.body.text.toLowerCase().trim();
    response = undefined;

    if (key.includes("december")) {
      response = { 
        "text": "Hang on there sparky! We're not quite ready for you. But I promise, we'll be up and running in time for the big day!",
        "attachments" :
        [
          {
            "text": "You're moving too fast! Check back soon for this riddle."
          }
        ]
      }
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/a4', {where: 'server'})
  .post(function(){
    response = undefined;

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/q5', {where: 'server'})
  .post(function(){
    var key = this.request.body.text.toLowerCase().trim();
    response = undefined;

    if (key.includes("mistletoe")) {
      response = { 
        "text": "Hang on there sparky! We're not quite ready for you. But I promise, we'll be up and running in time for the big day!",
        "attachments" :
        [
          {
            "text": "You're moving too fast! Check back soon for this riddle."
          }
        ]
      }
    }
    else {
      response = { "text": "I'm sorry " + this.request.body.user_name + ", that's not quite right. Try again!" };
    }

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});

Router.route('/a5', {where: 'server'})
  .post(function(){
    response = undefined;

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify(response));
});