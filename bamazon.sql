CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INTEGER,
stock_quantity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("4 pack drain snake cleaning tool", "maintenance", 8.99,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Great Stuff pestblock", "maintenance", 6.74,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Golf Training Mat", "sport", 30.59,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Putt-A-Bout Putting Mat", "sport", 18.56,18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Golf Chipping Net", "sport", 29.99,40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Farkle", "board game", 7.80,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("TetherPro USB 3.0 Super-speed micro-B cable, 15 feet", "camera accessories", 48.95,80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Internet's best pet gate with arched top | 3 panel", "pet gate", 229.94,30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("LaCie Rugged RAID Thunderbolt & USB HARD DRIVE 4TB", "computer accessories", 48.95,80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("From the Ground Up: A Journey to Reimagine the Promise of America", "books", 19.60,200);

SELECT*FROM products WHERE item_id(1);
