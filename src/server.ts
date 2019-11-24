import express = require('express')
import { MetricsHandler } from './metrics'

const app = express()
const port: string = process.env.PORT || '8080'

app.get('/', (req: any, res: any) => {
  res.write('Hello, your are in the home page. \n')
  res.write('In order to continue, you should add to the url "/hello/[your name]"')
  res.end()
})

app.get('/metrics.json', (req: any, res: any) => {
    MetricsHandler.get((err: Error | null, result?: any) => {
      if (err) {
        throw err
      }
      res.json(result)
    })
  })

app.get('/:name', (req: any, res: any) => {
    res.write('Error 404. \n')
    res.write('Page not found')
    res.end()
  })
app.get('/hello/thomas', (req: any, res: any) => {
    res.write('Hello, my name is Thomas. \n')
    res.write('I am 22 years old and I am studing engineering at ECE Paris.')
    res.end()
  })

app.get('/hello/:name', (req: any, res: any) => {
    res.write('Hello Anonymous ! \n')
    res.end()
  })

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})