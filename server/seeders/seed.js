const db = require('../config/connection');
const { User, Profession, Interest } = require('../models');
const userSeeds = require('./userSeeds.json');
const interestSeeds = require('./interestSeeds.json');
const professionSeeds = require('./professionSeeds.json');

//calling seed
db.once('open', async () => {
  try {
    //clean previous data
    await Interest.deleteMany({});
    await Profession.deleteMany({});
    await User.deleteMany({});

    //create glossaries
    await Interest.create(interestSeeds);
    await Profession.create(professionSeeds);

    //create user
    for (let i = 0; i < userSeeds.length; i++) {
      let profArray = [];
      let intArray = [];
      let user = Object.assign({}, userSeeds[i]);
      let userProf = await Profession.findOne({ professionOption: user.professions });
      let userInter = await Interest.findOne({ interestOption: user.interests });
      profArray.push(userProf._id);
      intArray.push(userInter._id);
      user.professions = profArray;
      user.interests = intArray;
      await User.create(user);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
