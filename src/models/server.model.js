const express = require('express')
const cors = require('cors')


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPaths = '/api/users'

        //middlewares
        this.middlewares()

        //routes
        this.routes();
    }

    middlewares(){

        //Cors
        this.app.use(cors())

        //parser JSON
        this.app.use(express.json())

        //carpeta publica
        this.app.use(express.static('public'));
    }


    routes(){
    //Rutas para usuarios
        this.app.use(this.userPaths, require('../routes/user.routes').router)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`################################### \n Server running on port ${this.port} \n###################################`)
        })
    }

}

module.exports = Server;