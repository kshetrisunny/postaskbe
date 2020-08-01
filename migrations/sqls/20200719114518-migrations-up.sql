/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS pin_login( 
    id INT PRIMARY KEY NOT NULL,
    role VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS department(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    pinLogin INT NOT NULL,
    FOREIGN KEY (pinLogin) REFERENCES pin_login(id)
);

CREATE TABLE IF NOT EXISTS category(
    id INT PRIMARY KEY NOT NULL,
    departmentId INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    FOREIGN KEY (departmentId) REFERENCES department(id)    
);

CREATE TABLE IF NOT EXISTS sub_category(
    id INT PRIMARY KEY NOT NULL,
    categoryId INT NOT NULL,
    name VARCHAR(20) NOT NULL, 
    FOREIGN KEY (categoryId) REFERENCES category(id)
);

CREATE TABLE IF NOT EXISTS product(
    id INT PRIMARY KEY NOT NULL,
    subCategoryId INT NOT NULL,
    name VARCHAR(30) NOT NULL, 
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    FOREIGN KEY (subCategoryId) REFERENCES sub_category(id)
);

CREATE TABLE IF NOT EXISTS product_price(
    id INT PRIMARY KEY NOT NULL,
    productId INT NOT NULL,
    price FLOAT,
    FOREIGN KEY (productId) REFERENCES product(id),
);

CREATE TABLE IF NOT EXISTS cart(
    id INT PRIMARY KEY NOT NULL,
    productId INT NOT NULL,
    quantity INT,
    price FLOAT,
    cartTotal FLOAT,
    FOREIGN KEY (productId) REFERENCES product(id),
);


CREATE TABLE IF NOT EXISTS order(
    id INT PRIMARY KEY NOT NULL,
    cartId INT NOT NULL,
    total FLOAT,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (cartId) REFERENCES cart(id),
);

CREATE TABLE IF NOT EXISTS payment(
    id INT PRIMARY KEY NOT NULL,
    paymentMode VARCHAR(20) NOT NULL,
    status boolean
);

CREATE TABLE IF NOT EXISTS table(
    id INT PRIMARY KEY NOT NULL,
    tableNumber INT NOT NULL,
);

CREATE TABLE IF NOT EXISTS table_order(
    id INT PRIMARY KEY NOT NULL,
    tableId INT NOT NULL,
    orderId INT NOT NULL,
    FOREIGN KEY (tableId) REFERENCES table(id),
    FOREIGN KEY (orderId) REFERENCES order(id),
);

