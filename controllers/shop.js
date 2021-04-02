const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {pageTitle: 'Shop',
                        prods: products,
                        pageTitle:'All products',
                        docTitle: 'Shop',
                        path: '/'
    });
  });
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail',  {product: product, pageTitle: product.title})
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
      res.render('shop/index', {pageTitle: 'Shop',
                          prods: products,
                          pageTitle: 'Shop',
                          path: '/'
      });
  });
}


exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your cart'
  });
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your orders'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout'
  });
}
