module.exports = (req, res, next) =>{
    const user = req.session.user
    
    if (!user || user.rule != 'admin'){
        return res.redirect("/")
    }
    res.locals.user = user
    return next()
}