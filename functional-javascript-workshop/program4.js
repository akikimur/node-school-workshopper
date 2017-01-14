function isShortMsg(value) {
  return value.length <= 50;
}

function getShortMessages(messages) {
      return messages.map(function(msg){
          return msg.message
      }).filter(isShortMsg);
}

module.exports = getShortMessages
