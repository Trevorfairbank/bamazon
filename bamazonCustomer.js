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
        if (err) throw err;
        console.table(response);
        buyProduct();
    })
})

function buyProduct() {

    connection.query("SELECT*FROM products", function (err, response) {

        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < response.length; i++) {
                            choiceArray.push(response[i].product_name + " Price: $ " + response[i].price);
                        }
                        return choiceArray;
                    },
                    message: "What item would you like to buy?"
                },
                {
                    type: "input",
                    message: "How many units would you like to buy?",
                    name: "quantity"
                }
            ])
            .then(function (data) {
                //console.log(data);

                //set selected item row into a variable
                let itemChosen;

                for (var i = 0; i < response.length; i++) {
                    if ((response[i].product_name + " Price: $ " + response[i].price) === data.choice) {
                        itemChosen = response[i];
                    }
                }

                if (parseInt(itemChosen.stock_quantity) > parseInt(data.quantity)) {

                    console.log(itemChosen);

                    const newStock = parseInt(itemChosen.stock_quantity) - parseInt(data.quantity);
                    connection.query(
                        "UPDATE products SET stock_quantity= ? WHERE item_id= ?",
                        [newStock, itemChosen.item_id],
                        function (error) {
                            if (error) throw err;
                            console.log("You have bought " + data.quantity + " " + itemChosen.product_name);
                            showTable();
                            buyProduct();
                        }
                    );
                }

                else {
                    console.log("Sorry, not enough in our inventory.");
                }


            })
    })
}

function showTable() {
    connection.query("SELECT*FROM products", function (err, response) {
        if(err) throw err;
        console.table(response);
    })
}
