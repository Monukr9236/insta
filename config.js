const mongoose=require('mongoose');


// connecting with database
mongoose.connect('mongodb+srv://monumksi:Monukumar123@cluster0.13vpfkg.mongodb.net/insta?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  