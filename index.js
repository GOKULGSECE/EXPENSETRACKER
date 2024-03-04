const express = require('express');
const app = express();
const port = 3000;
const Author= require('./models/author');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/blogs')
  .then(() => console.log('DB connected'))
  .catch(() => console.log('Not connected'));

// const Schema = mongoose.Schema;
// const authorSchema = new Schema({
//   name: String,
//   email: String,
// });

// const Author = mongoose.model('Author', authorSchema);
//console.log(Author.find({}).then((data)=>console.log(data)));
app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/hi', (req, res) => {
  res.json({
    message: 'developing',
  });
});

app.post('/hi', (req, res) => {
  console.log(req.body);
  res.json({
    name: req.body.name,
    email: req.body.email, // Corrected property name
  });
});

app.post('/authors', async(req, res) => {
  const {id}=req.params;
  const {name,email } = req.body; 
  console.log(name,email);// Corrected property name
  const author = await Author.find({"name":name});    
 console.log(author);
  if(author.length===0){
      const newAuthor = new Author({"name":name,"email":email});
      await newAuthor.save();
      res.json(newAuthor);
  }else{
    res.json(author);
  }
});

// Get all authors
// app.get('/authors', (req, res) => {
//   Author.find()
//     .then((authors) => res.json(authors))
//     .catch((error) => res.status(500).json({ error: error.message }));
// });

// Update author by ID
// app.post('/authors/:id', async (req, res) => {
//   const {id} = req.params;
//   const { name, email } = req.body; // Corrected property name

//   const author = await Author.findById(id);

//     if (author == null) {
//       res.status(404).json({
//         error: 'Author not found',
//       });
//       return;
//     }

//     author.name = name ;
//     author.email = email; // Corrected property name

//     await author.save();

//     res.json(author);
//   // catch (error) {
//   //   return res.status(500).json({ error: error.message });
//   // }
// });

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
