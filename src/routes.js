import { Router } from 'express'

const routes = new Router()

routes.get('/',(req,res)=>{
    res.json({message:"O index não tem nada :-)"})
})

routes.get('/index',(req,res)=>{
    res.send("24")
})

export default routes