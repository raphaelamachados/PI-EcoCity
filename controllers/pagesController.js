const pagesController = {
    index: (_req, res) => {
       return res.render("index")
    },
    // login: (req,res) => {
    //     return res.render("login")
    // },
    // cadastro: (req,res) => {
    //     return res.render("cadastro")
    // },
    coleta: (_req,res) => {
        return res.render("coleta")
    },
    sobrenos: (_req,res) => {
        return res.render("sobrenos")
    },
    perfilUsuario: (_req,res) => {
        return res.render("perfilUsuario")
    },
    perfilEmpresa: (_req,res) => {
        return res.render("perfilEmpresa")
    },
    menu: (_req,res) => {
        return res.render("menu")
    },
    adm: (_req,res) => {
        return res.render("adm")
    },
}
module.exports = pagesController