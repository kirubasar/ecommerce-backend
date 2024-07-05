// 1.create a router 
const express =require('express')
const useRouter = express.Router();
//2. add routes
useRouter.get('/', (req, res)=>{
    res.send('hello world')
})
//3.export the router
