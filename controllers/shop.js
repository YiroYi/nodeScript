const Product = require('../models/product');

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

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout'
  });
}
