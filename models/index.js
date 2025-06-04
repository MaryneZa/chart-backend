const User = require('./User')
const Data = require('./Data')
async function initCollections() {
  try {
    await User.createCollection();
    console.log('User collection is created!');

    await Data.createCollection();
    console.log('Data collection is created!');

  } catch (err) {
    console.error('Error creating collection:', err);
  }
};

module.exports = {
    User,
    Data,
    initCollections
}