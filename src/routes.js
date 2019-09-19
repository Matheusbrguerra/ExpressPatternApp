import { Router } from 'express'

const routes = new Router()

routes.get('/',(req,res)=>{
    res.send("MIAL NEGRO 2")
})

export default routes