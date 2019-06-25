CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(4,2),
stock_quantity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("4 pack drain snake cleaning tool", "maintenance", 9,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Great Stuff pestblock", "maintenance", 7,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Golf Training Mat", "sport", 31,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Putt-A-Bout Putting Mat", "sport", 19,18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Golf Chipping Net", "sport", 30,40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Farkle", "board game", 8,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("TetherPro USB 3.0 Super-speed micro-B cable, 15 feet", "camera accessories", 49,80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Internet's best pet gate with arched top | 3 panel", "pet gate", 35,30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("LaCie Rugged RAID Thunderbolt & USB HARD DRIVE 4TB", "computer accessories", 230,80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("From the Ground Up: A Journey to Reimagine the Promise of America", "books", 20,200);

SELECT*FROM products WHERE stock_quantity;
