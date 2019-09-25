import { Router } from 'express'

const routes = new Router()

routes.get('/index',(req,res)=>{
    res.json({message:"O index não tem nada :-)"})
})

routes.get('/teste',(req,res)=>{
    res.json({message:":-)"})
})

routes.get('/',(req,res)=>{
    res.send({message:"O index não tem nada tambem :-)"})
})

export default routes