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
    runQuestion();
})

function runQuestion() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "initQuestion",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        }
    ]).then(function (data) {

        connection.query("SELECT*FROM products", function (err, response) {
            if (err) throw err;

            if (data.initQuestion === "View Products for Sale") {
                showTable();
                runQuestion();
            }

            else if (data.initQuestion === "View Low Inventory") {
                connection.query("SELECT*FROM products WHERE stock_quantity BETWEEN 1 and 5", function (err, response) {
                    if (err) throw err;
                    console.table(response);
                    runQuestion();
                })
            }

            else if (data.initQuestion === "Add to Inventory") {
                console.table(response)
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What item ID would you like to update its stock quantity?",
                        name: "itemId"
                    },
                    {
                        type: "input",
                        message: "How many products do you want to add to the stock quantity?",
                        name: "howMany"
                    },
                ]).then(function (data) {
                    
                    let itemCurrentStock;

                    for (var i = 0; i < response.length; i++) {
                        if (response[i].item_id === parseInt(data.itemId)) {
                            itemCurrentStock = response[i].stock_quantity;
                        }
                    }

                    const addedStock = parseInt(data.howMany) + parseInt(itemCurrentStock);

                    connection.query(
                        "UPDATE products SET stock_quantity= ? WHERE item_id= ?",
                        [addedStock, data.itemId],
                         function (err) {
                            if (err) throw err;
                            console.log("You have added " + data.howMany + " more items to the inventory");
                            showTable();
                            runQuestion();
                        }
                    );
                })
            }

            else if (data.initQuestion === "Add New Product") {

                inquirer.prompt([
                    {
                        type: "input",
                        message: "What product would you like to add?",
                        name: "product"
                    },
                    {
                        type: "input",
                        message: "What department does your item belong to?",
                        name: "department"
                    },
                    {
                        type: "input",
                        message: "How much does your product cost?",
                        name: "price"
                    },
                    {
                        type: "input",
                        message: "How many do you have in stock?",
                        name: "stockQuantity"
                    },
                ])
                    .then(function (data) {
                        connection.query(
                            "INSERT INTO products SET ?", {
                                product_name: data.product,
                                department_name: data.department,
                                price: data.price,
                                stock_quantity: data.stockQuantity
                            }, function (err) {
                                if (err) throw err;
                                console.log("Your product has been added");
                                showTable();
                                runQuestion();

                            }

                        )
                    })
            }

            else {
                console.log("Have a nice day, GoodBye.")
                connection.end();
            }


        })


    })
}

function showTable() {
    connection.query("SELECT*FROM products", function (err, response) {
        if (err) throw err;
        console.table(response);
    })
}