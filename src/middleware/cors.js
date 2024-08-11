export const validCors =(req,res,next)=>{
    const frontend = ['http://localhost:5173']
    const {origin} = req.headers

    if(frontend.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin',origin)
        res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
        res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH')
        return next()
    }
    res.status(403).json({message:'Error de CORS. Origen no permitido'})
}