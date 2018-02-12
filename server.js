process.env.NTBA_FIX_319 = "any";
const TelegramBot = require('node-telegram-bot-api');

console.log('bot running');

const token = '414892953:AAGeQNON6kYM6Kza89gkXxtX2qhzucgWm8M';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
const resp = match[1]; // the captured "whatever"

// send back the matched "whatever" to the chat
bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

});


bot.onText(/\/cat (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    var resp = match[1]; // the captured "whatever"
    if (match[1] == 'test'){
        resp =
            'hey';

        bot.sendMessage(chatId, resp, {parse_mode : "HTML", disable_web_page_preview: true});

    } else {
        // send back category not found to the chat
        resp = "Category not found!";
        bot.sendMessage(chatId, resp);
    }


});


bot.on('inline_query', function(msg){

    var q_id = msg.id;
    var q_query = msg.query.trim();

    var results = [];



    if (q_query.toLowerCase().indexOf("time") !== -1) {
        var InlineQueryResultURL = {
            type: "article",
            id: 1,
            title: "time",
            input_message_content: {
                message_text: time\n" +
                "<code>time</code>",
                parse_mode: "HTML"
            },
            description: "time
        };

        results.push(InlineQueryResultURL);

        bot.answerInlineQuery(q_id, results, {cache_time: 1});
    }





});

bot.on('chosen_inline_result', function(msg)
{
    console.log('Chosen:' + msg);
});
