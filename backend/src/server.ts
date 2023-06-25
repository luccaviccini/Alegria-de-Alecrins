import 'express-async-errors'
import express, {json} from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(json())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}`))