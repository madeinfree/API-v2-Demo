/* @flow */
import * as path from 'path'
import * as express from 'express';

const app: express.Express = express()
app.use('/build', express.static(path.resolve(__dirname, '../../build/')))

app.get('*', (req, res) => {
  res.send(`
    <html>
      <title>TypeScript React</title>
      <body>
        <div id='view'></div>
        <script src='/build/bundle.js'></script>
      </body>
    </html>
  `)
})

app.listen(8080, () => {
  console.log('Server listen on port 8080');
  
})