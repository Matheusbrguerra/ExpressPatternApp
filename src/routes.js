import { Router } from 'express'

const routes = new Router()

routes.get('/',(req,res)=>{
    res.send("24")
})

export default routes