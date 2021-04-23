module.exports = (req, res, next) =>{
    const user = req.session.user
    console.log(user)
    
    if (!user || user.rule != 'empresa'){
        return res.redirect("/")
    }
    res.locals.user = user
    return next()
}