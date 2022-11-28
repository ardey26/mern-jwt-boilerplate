const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_STR_CONN,
      mongoose_config
    );
    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
