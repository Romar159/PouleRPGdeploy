module.exports = {
    TOKEN: process.env.token,
    PREFIX: "p<",
    VERSION: "0.5.0dep",
    DBCONNECTION: "mongodb+srv://" + process.env.dbuser + ":" + process.env.dbpass + "@cluster0.gw6s2.mongodb.net/PouleRPG?retryWrites=true&w=majority",
    DEFAULTSETTINGS: {
        prefix: "p<"
    }
}