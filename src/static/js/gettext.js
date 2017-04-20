module.exports = function (context, option) {
  if (option.data.root.messages) {
    // po2json adds a first null value in the array
    return option.data.root.messages[context][1]
  }
}
