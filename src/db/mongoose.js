const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://harmony:admin@cluster0-9f9v1.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
);
