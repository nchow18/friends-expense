const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    admin: Boolean
    phone: String
    events: [String]
  }

  type Cart {
    product_id: String
    quantity: Int
  }

  input CartInput {
    product_id: String
    quantity: Int
  }

  input UserInput {
    first_name: String
    last_name: String
    email: String
    password: String
    admin: Boolean
    phone: String
    events: [String]
  }

  input UserAccountInput {
    first_name: String
    last_name: String
    email: String
    password: String
    admin: Boolean
    address: [AddressInput]
    phone: String
    cart: [String]
    pastOrders: [String]
    stripe_customer_id: String
    stripe_setup_intent: String
  }

  type Product {
    _id: ID
    createdAt: String
    product_name: String
    product_category: String
    product_price: String
    product_description1: String
    product_description2: String
    product_description3: String
    product_description4: String
    product_weight: String
    product_picture: [String]
    product_nameChinese: String
    product_descriptionChinese: String
    product_status: Boolean
    product_sale_price: String
    product_bulk_quantity: Int
    product_bulk_price: String
    product_featured: Boolean
    product_views: Int
    inventory_id: String
    product_new: Boolean
  }

  type ProductPicture {
    product_url: [String]
  }

  input ProductPictureInput {
    product_url: [String]
  }

  input ProductInput {
    createdAt: String
    product_name: String
    product_category: String
    product_price: String
    product_description1: String
    product_description2: String
    product_description3: String
    product_description4: String
    product_weight: String
    product_picture: [String]
    product_nameChinese: String
    product_descriptionChinese: String
    product_status: Boolean!
    product_sale_price: String
    product_bulk_quantity: Int
    product_bulk_price: String
    product_featured: Boolean
    product_views: Int
    inventory_id: String
    product_new: Boolean
  }

  type Order {
    _id: ID
    orderTotal: String
    cart: [String]
    paid: Boolean
    delivery_date: String
    delivery_status: Boolean
    createdAt: String
    name: String
    phone: String
    address: String
    order_date: String
  }

  input OrderInput {
    orderTotal: String
    cart: [String]
    paid: Boolean
    delivery_date: String
    delivery_status: Boolean
    name: String
    phone: String
    address: String
    order_date: String
  }

  input OrderUpdate {
    cart: [String]
  }

  input OrderStatus {
    delivery_status: Boolean
  }

  type Address {
    street_name: String!
    city: String!
    street_number: String!
    postal_code: String!
    region: String!
    state: String!
  }

  input AddressInput {
    street_name: String!
    city: String!
    street_number: String!
    postal_code: String!
    region: String!
    state: String!
  }

  type Promo {
    _id: ID
    promoMsg1: String
    promo1Start: String
    promo1End: String
    promoMsg2: String
    promo2Start: String
    promo2End: String
    promoMsg3: String
    promo3Start: String
    promo3End: String
    mainPromo: String
    promoPicture1: String
    promoPicture2: String
    promoPicture3: String
    discount: String
    featuredProduct1: String
    featuredProduct2: String
    featuredProduct3: String
    contact_us_1: String
    contact_us_2: String
    address: String
    home_message: String
    main_banner: String
    delivery_fee1: String,
    delivery_fee2: String,
    delivery_fee3: String,
    notice_message: String
  }

  input PromoInput {
    promoMsg1: String
    promo1Start: String
    promo1End: String
    promoMsg2: String
    promo2Start: String
    promo2End: String
    promoMsg3: String
    promo3Start: String
    promo3End: String
    mainPromo: String
    promoPicture1: String
    promoPicture2: String
    promoPicture3: String
    discount: String
    featuredProduct1: String
    featuredProduct2: String
    featuredProduct3: String
    contact_us_1: String
    contact_us_2: String
    address: String
    home_message: String
    main_banner: String
    delivery_fee1: String,
    delivery_fee2: String,
    delivery_fee3: String,
    notice_message: String
  }

  type Customer {
    id: String
    object: String
    address: stripeAddress
    balance: Float
    currency: String
    description: String
    email: String
    name: String
    phone: String
  }

  type stripeAddress {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }

  type Charge {
    id: String
    object: String
    amount: Int
    receipt_url: String
    status: String
  }

  type Payment{
    id: String
    amount: Int
    created: Int
    currency: String
    description: String
    status: String
  }

  type Payments {
    data: [Payment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(user_id: ID!): User
    users: [User]
    userMe: User

    product(product_id: ID!): Product
    products: [Product]

    order(order_id: ID!): Order
    orders: [Order]

    promo: [Promo]
  }

  type Mutation {
    addUser(input: UserInput): Auth
    login(email: String!, password: String!): Auth
    addCart(input: [CartInput]): User
    updateCart(quantity: Int, product_id: String!): User
    removeCart(product_id: ID!): User
    updateUser(input: UserAccountInput): User
    addProduct(input: ProductInput!): Product
    removeProductPicture(product_id: String!, product_url: String): Product
    addProductPicture(product_url: String, product_id: String!): Product
    addProductView(product_id: String): Product
    updateProductPicture(product_url: String, product_id: String!, product_old_url: String!): Product
    updateProduct(input: ProductInput!, product_id: ID!): Product
    removeProduct(product_id: ID!): Product
    addOrder(input: OrderInput): Order
    updateOrder(input: OrderUpdate, order_id: ID!): Order
    removeOrder(order_id: String!): Order
    updateOrderStatus(input: OrderStatus, order_id: ID!): Order
    createPromo(input: PromoInput): Promo
    updatePromo(input: PromoInput, promo_id: ID!): Promo
    updateUserAccount(input: UserInput, user_id: ID!): User
    updateUserAddress(input: AddressInput, user_id: ID!): User
    addUserOrder(input: UserOrders): User
    clearCart(user_id: String): User
  }

`;

module.exports = typeDefs;
