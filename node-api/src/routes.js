const express = require('express');
const routes = express.Router();

const ProductController = require('../src/controllers/ProductController');

// #region api_routes
routes.route('/')
    .get((req,res)=>{    
        return res.send('Hello joao');
    }
);

routes.route('/products')
    .get(ProductController.index)    
    .post(ProductController.store);

routes.route('/products/:id')
    .get(ProductController.show)
    .put(ProductController.update)
    .delete(ProductController.delete)

routes.route('/usuarios')
    .get((req,res)=>{
        res.json({'usuario':'foda-se'})
    }
);

// #endregion

module.exports = routes;