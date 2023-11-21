const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config= {
    server: 'EVITRA2K16',
    authentication:{
        type: 'default',
        options: {
            userName: "root",
            password: "*eVitra25#!"
        }
    },
    options: {
        //REQUERIDO cambiar puerto dinámico.
        port: 49704,
        database: 'Evitra25',
        trustServerCertificate: true
    }
}

    const connection = new Connection(config);

    connection.connect();

    connection.on('connect',(err)=>{
        if(err){
            console.log("Error al conectarse.");
            throw err;
        }
        executeStatement();
    });

    function executeStatement(){
        console.log("Conectado a la base de datos");
        const request = new Request("SELECT 24/2",(err,rowCont)=>{
            if(err){
                throw err;
            }
            connection.close();

        });

        request.on('row',(columns)=>{
            console.log(columns);
        });

        connection.execSql(request);

    }

    