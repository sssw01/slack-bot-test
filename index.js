var Botkit = require('botkit')

var controller = Botkit.slackbot({
  debug: true
})

controller.spawn({
  token: 'xoxb-349567683973-391358562944-DdGJEhv0jvXASpT0GPA6BIHv',
}).startRTM()

controller.hears(
  ['xin chào'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'Hello from BOT')
    })
})
