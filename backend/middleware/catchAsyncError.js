module.exports= (theFunctn)=>(req,res,next)=>{
    Promise.resolve(theFunctn(req,res,next)).catch(next);
}