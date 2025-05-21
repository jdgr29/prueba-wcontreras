CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  stock INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW."updatedAt" IS NULL OR NEW."updatedAt" = OLD."updatedAt" THEN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

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
