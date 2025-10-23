import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import methodOverride from 'method-override'
import path from 'path'
import studentsRouter from './routes/students'

const app = express()

//Connect to the database
mongoose.conect(process.env.MONGODB_URI)
    .then(()=> console.log('Database Connected'))
    .catch((err)=> console.error("MongoDB Connection error: ",err))


//Setup EJS
app.set('view engine', ejs)
app.set('views', path.join(process.cwd(), 'views'))//cwd = current working directory. Instead of __dirname, it knows where it is in the project directoy and uses the directory it is contained in
app.use(express.static(path.join(process.cwd(), 'public')))

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))

app.get('/', (req,res) =>{
    
})