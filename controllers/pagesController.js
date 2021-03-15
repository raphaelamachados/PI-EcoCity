const pagesController = {
    index: (req, res) => {
       return res.render("index")
    },
    // login: (req,res) => {
    //     return res.render("login")
    // },
    // cadastro: (req,res) => {
    //     return res.render("cadastro")
    // },
    coleta: (req,res) => {
        return res.render("coleta")
    },
    sobrenos: (req,res) => {
        return res.render("sobrenos")
    },
    perfilUsuario: (req,res) => {
        return res.render("perfilUsuario")
    },
    quiz: (req,res) => {
        return res.render("quiz1")
    },
    menu: (req,res) => {
        return res.render("menu")
    },
}
module.exports = pagesController