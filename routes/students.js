import {Router} from 'express'
import Student from '../models/Student'

const router = Router()



// Homepage: GET /students?search=tem$cohort=Year%201
router.get('/', async(req,res)=>{
    const { search = "", cohort = "" } = req.query

    const q = {}
    if(search){
        q.$or = [
            {firstName: new RegExp(search, 'i')},
            {lastName: new RegExp(search, 'i')},
            {email: new RegExp(search, 'i')},
            {interests: new RegExp(search, 'i')},
        ]
    }
    if(cohort) q.cohort = cohort

    const students = await Student.find(q).sort({createdAt:-1}).lean()
    res.render("students/index", {students,search,cohort})
})

export default router