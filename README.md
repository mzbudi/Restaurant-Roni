# Restaurant-Roni
Project ini adalah Rest-API yang digunakan untuk memenuhi tugas praktek dari Coding Bootcamp Arkademy.

##Instalasi

- Untuk melakukan menggunakan api silakan di download atau di clone dengan perintah : 
	```git clone https://github.com/mzbudi/Restaurant-Roni.git```

- Selanjutnya lakukan perintah ini untuk menginstall seluruh modul : 
	```yarn install```

- Selanjutnya buat database dengan nama restaurant-roni dan import database restaurant-roni.sql

-Masukan code 
	```"start": "nodemon index.js" kedalam script package.json```

- Selanjutnya tuliskan perintah ini untuk memulai API :
	```yarn start```
  
##Dokumentasi Folder
  src
  index
  1. Config:
	  > mysql
    
  2. Controller:
    > products
    > orders
    > auth
    > category
    
  3. helper:
    > fileUpload
    > index
    
  4. middleware:
	  > authentication
    
  5. models:
    > products
    > orders
    > auth
    > category

  6. routes:
    > products
    > orders
    > auth
    > category
  
##Dokumentasi API
  1. products
      - Get /products/:id_product
            /products/?date=updated_at&nameSearch=a&category_id=category_id&limit=1&page=2&productName=product_name
            - no parameter = search all
            - date = sort by date
            - nameSearch = search by name
            - category_id = sort by category id
            - limit = limit item
            - page = page for pagination
            - product_name = sort by product name
            - id_product = product id
      
      - POST /products/
            - Bring : category_id, product_name, product_description, product_image, product_price
      - Delete /products/:id_product
      - Update /products
            - Bring : category_id, product_name, product_description, product_image, product_price

   2. Category
      - Get /category/:category_id
              /category/
      - POST /category/
            - Bring : category_name
      - Delete /products/:category_id
      - Update /products
            - Bring : category_id, product_name, product_description, product_image, product_price
            
   3. Orders
      - Get /orders/?order_id&invoice
            /orders/
            -no param = get all
            -order_id / invoice = get by it
      - POST /orders/
            - Bring : product_id, product_price, quantity
   
   4. Authentication
      - POST /auth/login
            - Bring : username, password
      
      - POST /auth/register
            - Bring : username, password, name
