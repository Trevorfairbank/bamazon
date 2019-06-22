const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon",

});

connection.connect(err => {
    if (err) throw (err);
    console.log("You are connected as id " + connection.threadId);
    connection.query("SELECT*FROM products", function (err, response) {
        if (err) throw (err);
        console.table(response);
        buyProduct();
    })
})

function buyProduct() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the item_ID of the product you would like to buy?",
                name: "item_id"
            },
            {
                type: "input",
                message: "How many units would you like to buy?",
                name: "quantity"
            }
        ])
        .then(function(response) {
            console.log(response);


        });
}

function quantityCheck(){
    

}
