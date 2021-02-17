const mysql=require("mysql")

function connect(){
  const connection=mysql.createConnection({
      host: "localhost",
      user: "Jin_12-2-21",
      password: "12345",
      database:"basic_12-2-21",

    });
     connection.connect();
     return connection;
  }
  
    module.exports={
      connect :connect
    }

  //INSERT INTO `basic_name_roll` (`ID`, `Name`, `Roll`, `branch`) VALUES ('2', 'Jinesh', '12', 'COMP')