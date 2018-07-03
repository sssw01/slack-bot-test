var Botkit = require('botkit')

var controller = Botkit.slackbot({
  debug: true
})

controller.spawn({
  token: 'xoxb-354439656786-393031731559-ANCl3mTz7Mc6z3Q8l5ZdsUDV',
}).startRTM()

controller.hears(
  ['xin chào', 'chào mày'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'ờ chào ' + user.name + '!')
        } else {
            bot.reply(message, 'chào!')
        }
    })
})