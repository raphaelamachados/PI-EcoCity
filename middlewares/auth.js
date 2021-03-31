module.exports = (req, res, next) =>{
    const user = req.session.user
    
    if (!user){
        return res.redirect("/login")
    }
    res.locals.user = user
    return next()
}