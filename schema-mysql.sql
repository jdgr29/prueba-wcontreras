CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  stock INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, stock) VALUES
('Laptop Lenovo ThinkPad', 899.99, 10),
('Mouse Logitech MX Master 3', 99.99, 50),
('Monitor Dell 27"', 299.49, 20),
('Teclado Mecánico Redragon', 74.90, 35),
('Auriculares Sony WH-1000XM4', 349.00, 15),
('Disco Duro Externo Seagate 2TB', 89.99, 40),
('Tablet Samsung Galaxy Tab A8', 229.99, 25),
('Impresora HP DeskJet 4155e', 149.95, 18),
('Webcam Logitech C920 HD Pro', 79.99, 30),
('Cargador USB-C Anker 20W', 19.99, 100),
('Router TP-Link Archer AX10', 129.99, 12),
('Silla Gamer Corsair T3 Rush', 279.99, 8),
('Hub USB-C Aukey 6-en-1', 39.99, 60),
('Power Bank Xiaomi 20000mAh', 49.99, 70),
('Monitor LG UltraGear 34"', 649.00, 6);