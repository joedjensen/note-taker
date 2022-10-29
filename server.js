// load all necessary modules
const express = require('express')
const path = require('path')
// api routes are all on index. only one but done for ease of to expand
const api = require('./routes/index')

const app = express();
// process.env.PORT for heroku deployment
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// html path for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// html path for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// set port to listen to
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
