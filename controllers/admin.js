const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    description: description,
    price: price
  }).then(() => {
    res.redirect('/');
  }).catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    return res.redirect('/');
  }

  const prodId = req.params.productId;

  Product.findByPk(prodId)
    .then(product => {
      if(!product) {
        return res.redirect('/');
      } else {
        res.render('admin/edit-product', {
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          editing: editMode,
          product: product
        });
      }
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;

  const product = new Product(prodId, title, imageUrl, description, price);

  Product.findByPk(prodId).then(product => {
    product.title = title;
    product.imageUrl = imageUrl;
    product.description = description;
    product.price = price;
    return product.save();
  })
  .then(
    res.redirect('/admin/products')
  )
  .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy()
    })
    .then(
      res.redirect('/admin/products')
    )
    .catch(err=>console.log(err));
}

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err => console.log(err));
};
