const db = require('./connection');
const { Order, Product, Promo, User } = require('../models');

db.once('open', async () => {
  console.log('opened');
  
  await User.deleteMany();
  await Order.deleteMany();
  await Product.deleteMany();

  await User.create(
    {
      first_name: 'Nathan',
      last_name: 'Chow',
      email: 'emailme@nathanchow.ca',
      admin: true,
      password: 'adminNathan123'
    }
  )

  await User.create(
    {
      first_name: 'Grace',
      last_name: 'Jong',
      email: 'grace.jong@gmail.com',
      admin: true,
      password: 'ilovekelvin'
    }
  )

  await User.create(
    {
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@gmail.com',
      admin: true,
      password: 'administrator123'
    }
  )

  await Promo.deleteMany();
  await Promo.create(
    {
      promoMsg1: 'EAT HEALTHY',
      promo1Start: '',
      promo1End: '',
      promoMsg2: 'FRESHLY FROZEN',
      promo2Start: '',
      promo2End: '',
      promoMsg3: 'HIGH QUALITY SEAFOOD',
      promo3Start: '',
      promo3End: '',
      mainPromo: 'FREE DELIVERY WITH ORDERS OVER RM100***',
      promoPicture1: 'promo1',
      promoPicture2: '',
      promoPicture3: '',
      discount: '6.66',
      featuredProduct1: '',
      featuredProduct2: '',
      featuredProduct3: '',
      contact_us_1: 'Joey 011-11264018',
      contact_us_2: 'Kelvin 016-4849744',
      address: '205, Jalan Perak, 11600 Jelutong, Penang, Malaysia',
      home_message: 'FRESHLY FROZEN SEAFOOD',
      main_banner: 'banner.JPEG',
      delivery_fee1: 'FREE DELIVERY for orders *RM100* and above for Penang area (RM5 delivery fee for orders less than RM100)',
      delivery_fee2: 'Outstation delivery fee RM40',
      delivery_fee3: 'Pickup location: 205, Jalan Perak, 11600 Jelutong',
      notice_message: 'For any troubles during checkout, please contact Grace 016-4223018'
    }
  )


 await Product.create({
   "product_id": 100,
   "product_name": "Smoked Salmon 烟熏三文鱼 100g",
   "product_picture": [
      "100-1",
      "100-2"
   ],
   "product_category": "fish",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 101,
   "product_name": "Salmon Steak 三文鱼排 ±250g/pc*",
   "product_picture": [
      "101-1",
      "101-2"
   ],
   "product_category": "fish",
   "product_price": " 9.50 ",
   "product_description1": "order by pieces",
   "product_description2": "RM38/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 102,
   "product_name": "Salmon Steak 三文鱼排 1kg*",
   "product_picture": [
      "102-1",
      "102-2"
   ],
   "product_category": "fish",
   "product_price": " 38.00 ",
   "product_description1": "order by kg (4-5pcs)",
   "product_description2": "RM38/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 103,
   "product_name": "Salmon Fillet 三文鱼片 ±180g/pc*",
   "product_picture": [
      "103-1"
   ],
   "product_category": "fish",
   "product_price": " 9.90 ",
   "product_description1": "order by pieces",
   "product_description2": "RM55/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 104,
   "product_name": "Salmon Fillet 三文鱼片 1kg*",
   "product_picture": [
      "104-1"
   ],
   "product_category": "fish",
   "product_price": " 60.00 ",
   "product_description1": "order by kg (5-7pcs)",
   "product_description2": "RM55/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 55,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 105,
   "product_name": "Salmon Fillet (uncut) 三文鱼片 (大) ±2kg/pc*",
   "product_picture": [
      "105-1"
   ],
   "product_category": "fish",
   "product_price": " 106.00 ",
   "product_description1": "order by pieces",
   "product_description2": "RM53/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 106,
   "product_name": "Salmon Head (half) 三文鱼头 (半粒) ±400g/pc*",
   "product_picture": [
      "106-1",
      "106-2"
   ],
   "product_category": "fish",
   "product_price": " 4.80 ",
   "product_description1": "order by pieces",
   "product_description2": "RM12/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 107,
   "product_name": "Halibut Fillet 大比目鱼片 ±150g/pc*",
   "product_picture": [
      "107-1"
   ],
   "product_category": "fish",
   "product_price": " 8.25 ",
   "product_description1": "order by pieces",
   "product_description2": "RM55/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 108,
   "product_name": "Halibut Fillet 大比目鱼片 1kg*",
   "product_picture": [
      "108-1"
   ],
   "product_category": "fish",
   "product_price": " 55.00 ",
   "product_description1": "order by kg (6-8pcs)",
   "product_description2": "RM55/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 109,
   "product_name": "Halibut Steak 大比目鱼排 ±200g/pc*",
   "product_picture": [
      "109-1"
   ],
   "product_category": "fish",
   "product_price": " 11.00 ",
   "product_description1": "order by pieces",
   "product_description2": "RM55/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 110,
   "product_name": "Halibut Steak 大比目鱼排 454g",
   "product_picture": [
      "110-1"
   ],
   "product_category": "fish",
   "product_price": " 25.00 ",
   "product_description1": "3pcs/pkt",
   "product_status": "true",
   "product_new": true,
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 111,
   "product_name": "Tuna Fillet 鲔鱼 ±500g/pc*",
   "product_picture": [
      "111-1"
   ],
   "product_category": "fish",
   "product_price": " 30.00 ",
   "product_description1": "order by pieces",
   "product_description2": "RM60/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 112,
   "product_name": "Cod Fish 鳕鱼 ±200g/pc*",
   "product_picture": [
      "112-1"
   ],
   "product_category": "fish",
   "product_price": " 25.60 ",
   "product_description1": "order by pieces",
   "product_description2": "RM128/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 113,
   "product_name": "Cod Fish 鳕鱼 1kg*",
   "product_picture": [
      "113-1"
   ],
   "product_category": "fish",
   "product_price": " 148.00 ",
   "product_description1": "order by kg (4-6pcs)",
   "product_description2": "RM128/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 128,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 114,
   "product_name": "Breaded Cod Fish 300g",
   "product_picture": [
      "114-1",
      "114-2"
   ],
   "product_category": "fish",
   "product_price": " 12.00 ",
   "product_description1": "5pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 115,
   "product_name": "Cod Fillet (Miso) 鳕鱼片(味增) 454g",
   "product_picture": [
      "115-1",
      "115-2"
   ],
   "product_category": "fish",
   "product_price": " 40.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 116,
   "product_name": "Halibut Fillet (Miso) 比目鱼片 (味增) 454g",
   "product_picture": [
      "116-1",
      "116-2"
   ],
   "product_category": "fish",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 117,
   "product_name": "Red Snapper Fillet (Miso) 红鱼片 (味增) 454g",
   "product_picture": [
      "117-1",
      "117-2"
   ],
   "product_category": "fish",
   "product_price": " 20.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 118,
   "product_name": "Tilapia (Premium Quality) 顶级金凤鱼片 200-250g",
   "product_picture": [
      "118-1"
   ],
   "product_category": "fish",
   "product_price": " 8.00 ",
   "product_description1": "1pc/pkt",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 7
})
 await Product.create({
   "product_id": 119,
   "product_name": "Siakap Fillet 石甲鱼 400-500g",
   "product_picture": [
      "119-1"
   ],
   "product_category": "fish",
   "product_price": " 15.00 ",
   "product_description1": "cut into 4-5pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 120,
   "product_name": "Patin Slice 巴丁鱼片 1kg",
   "product_picture": [
      "120-1"
   ],
   "product_category": "fish",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 9
})
 await Product.create({
   "product_id": 121,
   "product_name": "Saba Fillet 鲭鱼 500g",
   "product_picture": [
      "121-1"
   ],
   "product_category": "fish",
   "product_price": " 20.00 ",
   "product_description1": "3-5pcs/pkt",
   "product_status": "true",
   "product_sale_price": 17,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 122,
   "product_name": "Teriyaki Saba 照烧鲭鱼 180g ",
   "product_picture": [
      "122-1",
      "122-2"
   ],
   "product_category": "fish",
   "product_price": " 13.00 ",
   "product_description1": "2pcs/pkt",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 123,
   "product_name": "Shishamo 多春鱼",
   "product_picture": [
      "123-1"
   ],
   "product_category": "fish",
   "product_price": " 12.00 ",
   "product_description1": "7-8pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 124,
   "product_name": "Unagi 鳗鱼 200g",
   "product_picture": [
      "124-1"
   ],
   "product_category": "fish",
   "product_price": " 18.00 ",
   "product_description1": "1pc/pkt",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 16
})
 await Product.create({
   "product_id": 125,
   "product_name": "Unagi 鳗鱼 310g",
   "product_picture": [
      "125-1"
   ],
   "product_category": "fish",
   "product_price": " 30.00 ",
   "product_description1": "1pc/pkt",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 28
})
 await Product.create({
   "product_id": 126,
   "product_name": "Unagi 鳗鱼 380g",
   "product_picture": [
      "126-1"
   ],
   "product_category": "fish",
   "product_price": " 35.00 ",
   "product_description1": "1pc/pkt",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 33.33
})
 await Product.create({
   "product_id": 200,
   "product_name": "Breaded Scallops 180g",
   "product_picture": [
      "200-1"
   ],
   "product_category": "scallops",
   "product_price": " 8.00 ",
   "product_description1": "12pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 201,
   "product_name": "Scallop Sliders 培根带子 260g",
   "product_picture": [
      "201-1"
   ],
   "product_category": "scallops",
   "product_price": " 30.00 ",
   "product_description1": "8pcs/box",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 27
})
 await Product.create({
   "product_id": 202,
   "product_name": "Canadian Scallops XL 10/20 加拿大带子 500g",
   "product_picture": [
      "202-1"
   ],
   "product_category": "scallops",
   "product_price": " 35.00 ",
   "product_description1": "9-10pcs/box",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 33
})
 await Product.create({
   "product_id": 203,
   "product_name": "Canadian Scallops L 20/30 加拿大带子  500g",
   "product_picture": [
      "203-1"
   ],
   "product_category": "scallops",
   "product_price": " 32.50 ",
   "product_description1": "13-16pcs/box",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 30
})
 await Product.create({
   "product_id": 204,
   "product_name": "Hokkaido Scallops XL 10/20 北海道带子 1kg",
   "product_picture": [
      "204-1"
   ],
   "product_category": "scallops",
   "product_price": " 70.00 ",
   "product_description1": "18-20pcs/box",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 205,
   "product_name": "Hokkaido Scallops L 20/30 北海道带子 1kg",
   "product_picture": [
      "205-1"
   ],
   "product_category": "scallops",
   "product_price": " 65.00 ",
   "product_description1": "20-30pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 206,
   "product_name": "Hokkaido Scallops M 30/40 北海道带子 1kg",
   "product_picture": [
      "206-1"
   ],
   "product_category": "scallops",
   "product_price": " 60.00 ",
   "product_description1": "30-40pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 207,
   "product_name": "Hokkaido Scallops 40/50 北海道带子 1kg",
   "product_picture": [
      "207-1"
   ],
   "product_category": "scallops",
   "product_price": " 55.00 ",
   "product_description1": "40-50pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 208,
   "product_name": "Hokkaido Scallops 60/80 北海道带子 1kg",
   "product_picture": [
      "208-1"
   ],
   "product_category": "scallops",
   "product_price": " 45.00 ",
   "product_description1": "60-80pcs/box",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 209,
   "product_name": "Hokkaido Scallops 80/100 北海道带子 1kg",
   "product_picture": [
      "209-1"
   ],
   "product_category": "scallops",
   "product_price": " 40.00 ",
   "product_description1": "80-100pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 210,
   "product_name": "Half Shell Scallop 半壳大带子 1kg",
   "product_picture": [
      "210-1",
      "210-2"
   ],
   "product_category": "scallops",
   "product_price": " 26.00 ",
   "product_description1": "8-10pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 211,
   "product_name": "Half Shell Scallop (Pink) M 半壳带子 500g",
   "product_picture": [
      "211-1"
   ],
   "product_category": "scallops",
   "product_price": " 20.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 212,
   "product_name": "Half Shell Scallop (Pink) S 半壳带子 500g",
   "product_picture": [
      "212-1"
   ],
   "product_category": "scallops",
   "product_price": " 17.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 213,
   "product_name": "Japanese Hotate Scallop L 60/80 日本扇贝 1kg",
   "product_picture": [
      "213-1"
   ],
   "product_category": "scallops",
   "product_price": " 40.00 ",
   "product_description1": "60-80pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 214,
   "product_name": "Japanese Hotate Scallop S 100/150 日本扇贝 1kg",
   "product_picture": [
      "214-1"
   ],
   "product_category": "scallops",
   "product_price": " 35.00 ",
   "product_description1": "100-150pcs/box",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 300,
   "product_name": "White Prawn 明虾 L 20/30",
   "product_picture": [
      "300-1"
   ],
   "product_category": "shellfish",
   "product_price": " 45.00 ",
   "product_description1": "18-20pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 301,
   "product_name": "White Prawn 明虾 M 30/40",
   "product_picture": [
      "301-1"
   ],
   "product_category": "shellfish",
   "product_price": " 40.00 ",
   "product_description1": "23-25pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 302,
   "product_name": "Prawn Meat 虾肉 L",
   "product_picture": [
      "302-1"
   ],
   "product_category": "shellfish",
   "product_price": " 40.00 ",
   "product_description1": "±45pcs/pkt",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 303,
   "product_name": "Prawn Meat 虾肉 M",
   "product_picture": [
      "303-1"
   ],
   "product_category": "shellfish",
   "product_price": " 38.00 ",
   "product_description1": "±50pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 304,
   "product_name": "Prawn Meat 虾肉 S",
   "product_picture": [
      "304-1"
   ],
   "product_category": "shellfish",
   "product_price": " 35.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 305,
   "product_name": "Prawn Meat 虾肉 XS",
   "product_picture": [
      "305-1"
   ],
   "product_category": "shellfish",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 306,
   "product_name": "Ebi Tempura 香脆面包虾",
   "product_picture": [
      "306-1"
   ],
   "product_category": "shellfish",
   "product_price": " 10.00 ",
   "product_description1": "8 pcs/pkt",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 307,
   "product_name": "Fresh Oyster Meat 蠔肉 1.8kg",
   "product_picture": [
      "307-1"
   ],
   "product_category": "shellfish",
   "product_price": " 88.00 ",
   "product_description1": "excluded from promotions",
   "product_description2": "1.4-1.5kg nett oyster meat",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 308,
   "product_name": "Mantis Prawn Meat Fresh 新鲜虾姑肉 1kg",
   "product_picture": [
      "308-1",
      "308-2"
   ],
   "product_category": "shellfish",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 309,
   "product_name": "Scampi U7 大头虾 ±250g/nos*",
   "product_picture": [
      "309-1"
   ],
   "product_category": "shellfish",
   "product_price": " 17.50 ",
   "product_description1": "order by nos",
   "product_description2": "RM70/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 310,
   "product_name": "Lobster 龙虾 700g up/nos*",
   "product_picture": [
      "310-1",
      "310-2"
   ],
   "product_category": "shellfish",
   "product_price": " 70.00 ",
   "product_description1": "order by nos",
   "product_description2": "RM100/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 311,
   "product_name": "Lobster 龙虾 400-500g/nos*",
   "product_picture": [
      "311-1",
      "311-2"
   ],
   "product_category": "shellfish",
   "product_price": " 45.00 ",
   "product_description1": "order by nos",
   "product_description2": "RM90/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 312,
   "product_name": "Mala Crayfish Tailmeat  麻辣虾尾 300g",
   "product_picture": [
      "312-1"
   ],
   "product_category": "shellfish",
   "product_price": " 30.00 ",
   "product_status": "true",
   "product_sale_price": 27,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 313,
   "product_name": "Garlic Crayfish Whole 蒜香小龙虾 700g",
   "product_picture": [
      "313-1",
      "313-2"
   ],
   "product_category": "shellfish",
   "product_price": " 40.00 ",
   "product_status": "true",
   "product_sale_price": 37,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 314,
   "product_name": "Spicy Crayfish Whole 麻辣小龙虾700g",
   "product_picture": [
      "314-1",
      "314-2"
   ],
   "product_category": "shellfish",
   "product_price": " 40.00 ",
   "product_status": "false",
   "product_sale_price": 37,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 315,
   "product_name": "Thirteen Spices Crayfish Whole 十三香小龙虾 700g",
   "product_picture": [
      "315-1",
      "315-2"
   ],
   "product_category": "shellfish",
   "product_price": " 40.00 ",
   "product_status": "true",
   "product_sale_price": 37,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 316,
   "product_name": "Clam (Lala) 啦啦 500g",
   "product_picture": [
      "316-1"
   ],
   "product_category": "shellfish",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 317,
   "product_name": "Spicy Clam with Shell 啦啦(辣味) 400g",
   "product_picture": [
      "317-1"
   ],
   "product_category": "shellfish",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 318,
   "product_name": "Premium Black Mussels 贻贝 907g",
   "product_picture": [
      "318-1"
   ],
   "product_category": "shellfish",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 319,
   "product_name": "Crab Meat (Mix) 螃蟹肉 400g",
   "product_picture": [
      "319-1",
      "319-2"
   ],
   "product_category": "shellfish",
   "product_price": " 30.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 320,
   "product_name": "Crab meat (Red) 螃蟹肉 (蟹钳肉) 400g",
   "product_picture": [
      "320-1",
      "320-2"
   ],
   "product_category": "shellfish",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 321,
   "product_name": "Crab Meat (White) 螃蟹肉 (白蟹肉) 400g",
   "product_picture": [
      "321-1",
      "321-2"
   ],
   "product_category": "shellfish",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 322,
   "product_name": "Crab Meat (Red) 螃蟹肉 (蟹钳肉) 800g",
   "product_picture": [
      "322-1",
      "322-2"
   ],
   "product_category": "shellfish",
   "product_price": " 55.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 323,
   "product_name": "Crab Meat (White) 螃蟹肉 (白蟹肉) 800g",
   "product_picture": [
      "323-1",
      "323-2"
   ],
   "product_category": "shellfish",
   "product_price": " 55.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 324,
   "product_name": "Soft Shell Crab 软壳蟹 ±160g/nos*",
   "product_picture": [
      "324-1",
      "324-2"
   ],
   "product_category": "shellfish",
   "product_price": " 7.20 ",
   "product_description1": "order by nos",
   "product_description2": "RM45/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 325,
   "product_name": "Live Mud Crab Male 2nos/kg 肉螃蟹 (500g up)*",
   "product_picture": [
      "325-1",
      "325-2"
   ],
   "product_category": "shellfish",
   "product_price": " Market Price ",
   "product_description1": "order by nos",
   "product_description3": "*Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 326,
   "product_name": "Live Mud Crab Male 3nos/kg 肉螃蟹 (300-400g)*",
   "product_picture": [
      "326-1",
      "326-2"
   ],
   "product_category": "shellfish",
   "product_price": " Market Price ",
   "product_description1": "order by nos",
   "product_description3": "*Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 327,
   "product_name": "Live Mud Crab Male 4nos/kg 肉螃蟹 (250-300g)*",
   "product_picture": [
      "327-1",
      "327-2"
   ],
   "product_category": "shellfish",
   "product_price": " Market Price ",
   "product_description1": "order by nos",
   "product_description3": "*Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 328,
   "product_name": "Live Mud Crab Female (Egg) Crab 蛋螃蟹 (300g up)*",
   "product_picture": [
      "328-1",
      "328-2"
   ],
   "product_category": "shellfish",
   "product_price": " Market Price ",
   "product_description1": "order by nos",
   "product_description3": "*Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 329,
   "product_name": "King Crab 帝王蟹 400-600g",
   "product_picture": [
      "329-1"
   ],
   "product_category": "shellfish",
   "product_price": " 50.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 330,
   "product_name": "King Crab 帝王蟹 600-800g",
   "product_picture": [
      "330-1"
   ],
   "product_category": "shellfish",
   "product_price": " 80.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 331,
   "product_name": "King Crab 帝王蟹 800-1000g",
   "product_picture": [
      "331-1"
   ],
   "product_category": "shellfish",
   "product_price": " 100.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 332,
   "product_name": "King Crab 帝王蟹 1-1.2kg*",
   "product_picture": [
      "332-1"
   ],
   "product_category": "shellfish",
   "product_price": " 129.60 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 333,
   "product_name": "King Crab 帝王蟹 1.2-1.4kg*",
   "product_picture": [
      "333-1"
   ],
   "product_category": "shellfish",
   "product_price": " 151.20 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 334,
   "product_name": "King Crab 帝王蟹 1.4-1.6kg*",
   "product_picture": [
      "334-1"
   ],
   "product_category": "shellfish",
   "product_price": " 172.80 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 335,
   "product_name": "King Crab 帝王蟹 1.6-1.8kg*",
   "product_picture": [
      "335-1"
   ],
   "product_category": "shellfish",
   "product_price": " 194.40 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 336,
   "product_name": "King Crab 帝王蟹 1.8-2kg*",
   "product_picture": [
      "336-1"
   ],
   "product_category": "shellfish",
   "product_price": " 216.00 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 337,
   "product_name": "King Crab 帝王蟹 2kg up*",
   "product_picture": [
      "337-1"
   ],
   "product_category": "shellfish",
   "product_price": " 237.60 ",
   "product_description1": "RM108/kg",
   "product_description3": "*Estimated price only *Final price will be based on actual weight",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 400,
   "product_name": "Baby Octopus 小章鱼",
   "product_picture": [
      "400-1"
   ],
   "product_category": "squid",
   "product_price": " 11.50 ",
   "product_description1": "6-15pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 401,
   "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg",
   "product_picture": [
      "401-1",
      "401-2"
   ],
   "product_category": "squid",
   "product_price": " 88.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 402,
   "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g",
   "product_picture": [
      "402-1",
      "402-2"
   ],
   "product_category": "squid",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 403,
   "product_name": "Cleaned Sotong 10/20 苏东 2kg",
   "product_picture": [
      "403-1",
      "403-2"
   ],
   "product_category": "squid",
   "product_price": " 35.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 404,
   "product_name": "Cleaned Sotong 10/20 苏东 1kg ",
   "product_picture": [
      "404-1",
      "404-2"
   ],
   "product_category": "squid",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 405,
   "product_name": "Flower Squid 花枝 1kg",
   "product_picture": [
      "405-1"
   ],
   "product_category": "squid",
   "product_price": " 18.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 406,
   "product_name": "Spicy Squid 香辣大鱿鱼 400g",
   "product_picture": [
      "406-1"
   ],
   "product_category": "squid",
   "product_price": " 17.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 407,
   "product_name": "Squid Tentacle 鱿鱼须 500g",
   "product_picture": [
      "407-1",
      "407-2"
   ],
   "product_category": "squid",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 500,
   "product_name": "Australian Beef Slice 牛肉片 500g",
   "product_picture": [
      "500-1"
   ],
   "product_category": "meat",
   "product_price": " 30.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 501,
   "product_name": "Breaded Chicken Chop 200g",
   "product_picture": [
      "501-1"
   ],
   "product_category": "meat",
   "product_price": " 8.00 ",
   "product_description1": "1pc/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 502,
   "product_name": "Chicken Burger Patty 汉堡肉片 1kg",
   "product_picture": [
      "502-1"
   ],
   "product_category": "meat",
   "product_price": " 16.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 503,
   "product_name": "Chicken Nuggets Tempura 鸡肉块 1kg",
   "product_picture": [
      "503-1"
   ],
   "product_category": "meat",
   "product_price": " 16.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 504,
   "product_name": "Crispy Popcorn Chicken 香酥鸡米花 1kg",
   "product_picture": [
      "504-1"
   ],
   "product_category": "meat",
   "product_price": " 22.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 505,
   "product_name": "Miami Butcher Chicken Ham (Sliced) 1kg",
   "product_picture": [
      "505-1"
   ],
   "product_category": "meat",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 22,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 506,
   "product_name": "Miami Butcher Chicken Sausage Breakfast 1kg",
   "product_picture": [
      "506-1"
   ],
   "product_category": "meat",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 507,
   "product_name": "Miami Butcher Chicken Sausage Jumbo 1kg",
   "product_picture": [
      "507-1"
   ],
   "product_category": "meat",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 508,
   "product_name": "Miami Butcher Turkey Bacon (Sliced) 1kg",
   "product_picture": [
      "508-1"
   ],
   "product_category": "meat",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 509,
   "product_name": "Smoked Duck Breast 烟熏鸭胸肉 200-300g",
   "product_picture": [
      "509-1"
   ],
   "product_category": "meat",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_new": true,
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 510,
   "product_name": "Black Pepper Duck Breast Meat 黑胡椒鸭胸肉 200-300g",
   "product_picture": [
      "510-1"
   ],
   "product_category": "meat",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_new": true,
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 511,
   "product_name": "Smoked Back Bacon 黑毛猪肉培根 500g",
   "product_picture": [
      "511-1"
   ],
   "product_category": "meat",
   "product_price": " 30.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 27,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 512,
   "product_name": "Smoked Streaky Bacon 烟熏五花肉 250g",
   "product_picture": [
      "512-1"
   ],
   "product_category": "meat",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 513,
   "product_name": "Scallop Sliders 培根带子 260g",
   "product_picture": [
      "513-1"
   ],
   "product_category": "meat",
   "product_price": " 30.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 27
})
 await Product.create({
   "product_id": 514,
   "product_name": "Taiwanese Sausage (S) 台湾香肠(小)",
   "product_picture": [
      "514-1"
   ],
   "product_category": "meat",
   "product_price": " 6.50 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 515,
   "product_name": "Meatballs 猪肉丸 400g",
   "product_picture": [
      "515-1"
   ],
   "product_category": "meat",
   "product_price": " 11.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 516,
   "product_name": "Mince Meat 猪肉碎 (S) 300g",
   "product_picture": [
      "516-1"
   ],
   "product_category": "meat",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 517,
   "product_name": "Mince Meat 猪肉碎 (L) 600g",
   "product_picture": [
      "517-1"
   ],
   "product_category": "meat",
   "product_price": " 15.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 518,
   "product_name": "Shabu Shabu Pork 猪肉片 300g",
   "product_picture": [
      "518-1"
   ],
   "product_category": "meat",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 519,
   "product_name": "Shabu Shabu Pork Belly 五花肉片 300g",
   "product_picture": [
      "519-1"
   ],
   "product_category": "meat",
   "product_price": " 13.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 521,
   "product_name": "Japanese Chashu 日式叉烧 200g",
   "product_picture": [
      "521-1",
      "521-2"
   ],
   "product_category": "meat",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 522,
   "product_name": "Thai Moo Ping 泰国猪肉串 (10pcs/pkt)",
   "product_picture": [
      "522-1"
   ],
   "product_category": "meat",
   "product_price": " 15.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 523,
   "product_name": "Cheddar Cheese Sausages 芝士香肠 400g",
   "product_picture": [
      "523-1"
   ],
   "product_category": "meat",
   "product_price": " 22.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 524,
   "product_name": "Mild Italian Sausages 意大利香肠 400g",
   "product_picture": [
      "524-1"
   ],
   "product_category": "meat",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 525,
   "product_name": "Pork & Herbs Sausages 英式香料香肠 400g",
   "product_picture": [
      "525-1"
   ],
   "product_category": "meat",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 526,
   "product_name": "Habanero Chilli Sausages 辣味香肠 400g",
   "product_picture": [
      "526-1"
   ],
   "product_category": "meat",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 527,
   "product_name": "Pork Stomach 猪肚 400-600g",
   "product_picture": [
      "527-1",
      "527-2"
   ],
   "product_category": "meat",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 528,
   "product_name": "Pork Stomach (Cleaned) 猪肚 400-600g",
   "product_picture": [
      "528-1",
      "528-2"
   ],
   "product_category": "meat",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 529,
   "product_name": "Pork Tendon 猪脚筋 500g",
   "product_picture": [
      "529-1"
   ],
   "product_category": "meat",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 530,
   "product_name": "Lobak 卤肉",
   "product_picture": [
      "530-1"
   ],
   "product_category": "meat",
   "product_price": " 16.00 ",
   "product_description1": "16pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 531,
   "product_name": "Cleaned Frog 本地野生田鸡 1kg",
   "product_picture": [
      "531-1",
      "531-2"
   ],
   "product_category": "meat",
   "product_price": " 45.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 601,
   "product_name": "Caviar 鱼子酱 100g",
   "product_picture": [
      "601-1"
   ],
   "product_category": "special",
   "product_price": " 32.00 ",
   "product_status": "true",
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 30
})
 await Product.create({
   "product_id": 602,
   "product_name": "Ebiko Orange 虾卵 500g",
   "product_picture": [
      "602-1"
   ],
   "product_category": "special",
   "product_price": " 45.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 603,
   "product_name": "Tobiko Orange 鱼卵 500g",
   "product_picture": [
      "603-1"
   ],
   "product_category": "special",
   "product_price": " 45.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 604,
   "product_name": "Ebiko Orange 虾卵 50g",
   "product_picture": [
      "604-1"
   ],
   "product_category": "special",
   "product_price": " 10.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 605,
   "product_name": "Tobiko Orange 鱼卵 50g",
   "product_picture": [
      "605-1"
   ],
   "product_category": "special",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 606,
   "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 2kg",
   "product_picture": [
      "606-1",
      "606-2"
   ],
   "product_category": "special",
   "product_price": " 88.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 607,
   "product_name": "Chuka Idako (Seasoned Baby Octopus) 腌制小章鱼 500g",
   "product_picture": [
      "607-1",
      "607-2"
   ],
   "product_category": "special",
   "product_price": " 25.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 608,
   "product_name": "Chuka Wakame 日式凉拌海带 450g",
   "product_picture": [
      "608-1"
   ],
   "product_category": "special",
   "product_price": " 12.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 609,
   "product_name": "Ebi Tempura 香脆面包虾 (8pcs/pkt)",
   "product_picture": [
      "609-1"
   ],
   "product_category": "special",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 610,
   "product_name": "Ebi Tempura 香脆面包虾 (10pcs/pkt)",
   "product_picture": [
      "610-1",
      "610-2"
   ],
   "product_category": "special",
   "product_price": " 12.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 611,
   "product_name": "Breaded Scallops 180g",
   "product_picture": [
      "611-1"
   ],
   "product_category": "special",
   "product_price": " 8.00 ",
   "product_description1": "12pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 612,
   "product_name": "Japan Tamagoyaki 日本厚烧玉子 500g",
   "product_picture": [
      "612-1"
   ],
   "product_category": "special",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 613,
   "product_name": "Tamagoyaki 厚烧玉子 500g",
   "product_picture": [
      "613-1",
      "613-2"
   ],
   "product_category": "special",
   "product_price": " 20.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 614,
   "product_name": "Sea Urchin Platter (L) 海胆 100g",
   "product_picture": [
      "614-1",
      "614-2"
   ],
   "product_category": "special",
   "product_price": " 60.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 615,
   "product_name": "Abalone Can 罐头鲍鱼 215g (4pcs)",
   "product_picture": [
      "615-1"
   ],
   "product_category": "special",
   "product_price": " 15.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 13
})
 await Product.create({
   "product_id": 616,
   "product_name": "Abalone Can 罐头鲍鱼 425g (5pcs)",
   "product_picture": [
      "616-1"
   ],
   "product_category": "special",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 26
})
 await Product.create({
   "product_id": 617,
   "product_name": "Fish Maw 鱼鳔 100g",
   "product_picture": [
      "617-1",
      "617-2"
   ],
   "product_category": "special",
   "product_price": " 16.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 618,
   "product_name": "Fo Tiao Qiang 佛跳墙 200g",
   "product_picture": [
      "618-1"
   ],
   "product_category": "special",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 25
})
 await Product.create({
   "product_id": 619,
   "product_name": "Fo Tiao Qiang 佛跳墙 200g",
   "product_picture": [
      "619-1"
   ],
   "product_category": "special",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 5,
   "product_bulk_price": 22
})
 await Product.create({
   "product_id": 620,
   "product_name": "Fo Tiao Qiang 佛跳墙 200g",
   "product_picture": [
      "620-1"
   ],
   "product_category": "special",
   "product_price": " 28.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 10,
   "product_bulk_price": 20
})
 await Product.create({
   "product_id": 621,
   "product_name": "Imitation Shark Fin 碗仔翅 500g",
   "product_picture": [
      "621-1"
   ],
   "product_category": "special",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 622,
   "product_name": "Shark Fin (Real) 鲍翅 500g",
   "product_picture": [
      "622-1"
   ],
   "product_category": "special",
   "product_price": " 53.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 623,
   "product_name": "Sea Cucumber (L) 海参 (大) 1kg",
   "product_picture": [
      "623-1",
      "623-2"
   ],
   "product_category": "special",
   "product_price": " 83.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 624,
   "product_name": "Sea Cucumber (S) 海参 (小) 1kg",
   "product_picture": [
      "624-1",
      "624-2"
   ],
   "product_category": "special",
   "product_price": " 78.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 625,
   "product_name": "Sea Cucumber (S) 海参 (小) 500g",
   "product_picture": [
      "625-1",
      "625-2"
   ],
   "product_category": "special",
   "product_price": " 40.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 700,
   "product_name": "Abalone Slice 鲍鱼片 300g",
   "product_picture": [
      "700-1"
   ],
   "product_category": "hotpot",
   "product_price": " 8.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 701,
   "product_name": "Japan King Crab Filament Stick 日本帝王蟹柳 250g",
   "product_picture": [
      "701-1"
   ],
   "product_category": "hotpot",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 702,
   "product_name": "Shrimp Paste 虾滑 150g",
   "product_picture": [
      "702-1",
      "702-2"
   ],
   "product_category": "hotpot",
   "product_price": " 9.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 703,
   "product_name": "Tobiko Shrimp Paste 鱼卵虾滑 150g",
   "product_picture": [
      "703-1",
      "703-2"
   ],
   "product_category": "hotpot",
   "product_price": " 9.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 704,
   "product_name": "Nikudo Fish Paste 鱼滑 200g",
   "product_picture": [
      "704-1",
      "704-2"
   ],
   "product_category": "hotpot",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 705,
   "product_name": "Cheese Tofu 芝士豆腐 500g",
   "product_picture": [
      "705-1"
   ],
   "product_category": "hotpot",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 706,
   "product_name": "Seafood Tofu 海鲜豆腐 500g",
   "product_picture": [
      "706-1"
   ],
   "product_category": "hotpot",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 500,
   "product_name": "Australian Beef Slice 牛肉片 500g",
   "product_picture": [
      "500-1"
   ],
   "product_category": "hotpot",
   "product_price": " 30.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 514,
   "product_name": "Taiwanese Sausage (S) 台湾香肠(小)",
   "product_picture": [
      "514-1"
   ],
   "product_category": "hotpot",
   "product_price": " 6.50 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 515,
   "product_name": "Meatballs 猪肉丸 400g",
   "product_picture": [
      "515-1"
   ],
   "product_category": "hotpot",
   "product_price": " 11.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 516,
   "product_name": "Mince Meat 猪肉碎 (S) 300g",
   "product_picture": [
      "516-1"
   ],
   "product_category": "hotpot",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 517,
   "product_name": "Mince Meat 猪肉碎 (L) 600g",
   "product_picture": [
      "517-1"
   ],
   "product_category": "hotpot",
   "product_price": " 15.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 518,
   "product_name": "Shabu Shabu Pork 猪肉片 300g",
   "product_picture": [
      "518-1"
   ],
   "product_category": "hotpot",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 519,
   "product_name": "Shabu Shabu Pork Belly 五花肉片 300g",
   "product_picture": [
      "519-1"
   ],
   "product_category": "hotpot",
   "product_price": " 13.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 521,
   "product_name": "Japanese Chashu 日式叉烧 200g",
   "product_picture": [
      "521-1",
      "521-2"
   ],
   "product_category": "hotpot",
   "product_price": " 20.00 ",
   "product_status": "true",
   "product_new": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 509,
   "product_name": "Smoked Duck Breast 烟熏鸭胸肉 200-300g",
   "product_picture": [
      "509-1"
   ],
   "product_category": "hotpot",
   "product_price": " 13.00 ",
   "product_status": "true",
   "product_new": true,
   "product_featured": true,
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 405,
   "product_name": "Flower Squid 花枝 1kg",
   "product_picture": [
      "405-1"
   ],
   "product_category": "hotpot",
   "product_price": " 18.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 623,
   "product_name": "Sea Cucumber (L) 海参 (大) 1kg",
   "product_picture": [
      "623-1",
      "623-2"
   ],
   "product_category": "hotpot",
   "product_price": " 83.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 624,
   "product_name": "Sea Cucumber (S) 海参 (小) 1kg",
   "product_picture": [
      "624-1",
      "624-2"
   ],
   "product_category": "hotpot",
   "product_price": " 78.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 625,
   "product_name": "Sea Cucumber (S) 海参 (小) 500g",
   "product_picture": [
      "625-1",
      "625-2"
   ],
   "product_category": "hotpot",
   "product_price": " 40.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 617,
   "product_name": "Fish Maw 鱼鳔 100g",
   "product_picture": [
      "617-1",
      "617-2"
   ],
   "product_category": "hotpot",
   "product_price": " 16.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 202,
   "product_name": "Canadian Scallops XL 10/20 加拿大带子 500g",
   "product_picture": [
      "202-1"
   ],
   "product_category": "hotpot",
   "product_price": " 35.00 ",
   "product_description1": "9-10pcs/box",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 33
})
 await Product.create({
   "product_id": 203,
   "product_name": "Canadian Scallops L 20/30 加拿大带子  500g",
   "product_picture": [
      "203-1"
   ],
   "product_category": "hotpot",
   "product_price": " 32.50 ",
   "product_description1": "13-16pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 30
})
 await Product.create({
   "product_id": 204,
   "product_name": "Hokkaido Scallops XL 10/20 北海道带子 1kg",
   "product_picture": [
      "204-1"
   ],
   "product_category": "hotpot",
   "product_price": " 70.00 ",
   "product_description1": "18-20pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 205,
   "product_name": "Hokkaido Scallops L 20/30 北海道带子 1kg",
   "product_picture": [
      "205-1"
   ],
   "product_category": "hotpot",
   "product_price": " 65.00 ",
   "product_description1": "20-30pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 206,
   "product_name": "Hokkaido Scallops M 30/40 北海道带子 1kg",
   "product_picture": [
      "206-1"
   ],
   "product_category": "hotpot",
   "product_price": " 60.00 ",
   "product_description1": "30-40pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 207,
   "product_name": "Hokkaido Scallops 40/50 北海道带子 1kg",
   "product_picture": [
      "207-1"
   ],
   "product_category": "hotpot",
   "product_price": " 55.00 ",
   "product_description1": "40-50pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 208,
   "product_name": "Hokkaido Scallops 60/80 北海道带子 1kg",
   "product_picture": [
      "208-1"
   ],
   "product_category": "hotpot",
   "product_price": " 45.00 ",
   "product_description1": "60-80pcs/box",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 209,
   "product_name": "Hokkaido Scallops 80/100 北海道带子 1kg",
   "product_picture": [
      "209-1"
   ],
   "product_category": "hotpot",
   "product_price": " 40.00 ",
   "product_description1": "80-100pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 210,
   "product_name": "Half Shell Scallop 半壳大带子 1kg",
   "product_picture": [
      "210-1",
      "210-2"
   ],
   "product_category": "hotpot",
   "product_price": " 26.00 ",
   "product_description1": "8-10pcs/pkt",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 211,
   "product_name": "Half Shell Scallop (Pink) M 半壳带子 500g",
   "product_picture": [
      "211-1"
   ],
   "product_category": "hotpot",
   "product_price": " 20.00 ",
   "product_status": "false",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 212,
   "product_name": "Half Shell Scallop (Pink) S 半壳带子 500g",
   "product_picture": [
      "212-1"
   ],
   "product_category": "hotpot",
   "product_price": " 17.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 213,
   "product_name": "Japanese Hotate Scallop L 60/80 日本扇贝 1kg",
   "product_picture": [
      "213-1"
   ],
   "product_category": "hotpot",
   "product_price": " 40.00 ",
   "product_description1": "60-80pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 214,
   "product_name": "Japanese Hotate Scallop S 100/150 日本扇贝 1kg",
   "product_picture": [
      "214-1"
   ],
   "product_category": "hotpot",
   "product_price": " 35.00 ",
   "product_description1": "100-150pcs/box",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 800,
   "product_name": "Frozen Blueberries 冷冻蓝莓 500g",
   "product_picture": [
      "800-1"
   ],
   "product_category": "fruits",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 801,
   "product_name": "Frozen Mixed Berries 冷冻混莓 500g",
   "product_picture": [
      "801-1"
   ],
   "product_category": "fruits",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 802,
   "product_name": "Frozen Mixed Fruits 冷冻水果 500g",
   "product_picture": [
      "802-1"
   ],
   "product_category": "fruits",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 803,
   "product_name": "Frozen Rasberries 冷冻山莓 500g",
   "product_picture": [
      "803-1"
   ],
   "product_category": "fruits",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 804,
   "product_name": "Frozen Strawberries 冷冻草莓 500g",
   "product_picture": [
      "804-1"
   ],
   "product_category": "fruits",
   "product_price": " 14.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 12
})
 await Product.create({
   "product_id": 900,
   "product_name": "Edamame 日本毛豆 500g",
   "product_picture": [
      "900-1"
   ],
   "product_category": "vegetables",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 3,
   "product_bulk_price": 6
})
 await Product.create({
   "product_id": 901,
   "product_name": "Edamame (peeled) 去壳毛豆 500g",
   "product_picture": [
      "901-1"
   ],
   "product_category": "vegetables",
   "product_price": " 9.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 902,
   "product_name": "Sweet Corn 甜玉米 500g",
   "product_picture": [
      "902-1"
   ],
   "product_category": "vegetables",
   "product_price": " 8.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 903,
   "product_name": "French Fries (Crinkle Cut) 薯条 1kg",
   "product_picture": [
      "903-1"
   ],
   "product_category": "vegetables",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 904,
   "product_name": "French Fries (Shoestring) 薯条 1kg",
   "product_picture": [
      "904-1"
   ],
   "product_category": "vegetables",
   "product_price": " 10.00 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})
 await Product.create({
   "product_id": 905,
   "product_name": "Chuka Wakame 日式凉拌海带 450g",
   "product_picture": [
      "905-1",
      "905-2"
   ],
   "product_category": "vegetables",
   "product_price": " 12.50 ",
   "product_status": "true",
   "product_sale_price": 0,
   "product_bulk_quantity": 0,
   "product_bulk_price": 0
})


 
 
    

  console.log('order seeded');

  process.exit();

});