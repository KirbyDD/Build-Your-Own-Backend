const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'))
app.set('port', process.env.PORT || 3000 )

app.locals.title = 'Sim Youtube';

app.get('/', (request, response) => {
  response.send('Inital response setup is working')
})

app.listen(app.get('port'), () => (
  console.log(` ${app.locals.title} is running on http://localhost:${app.get('port')}.`)
))