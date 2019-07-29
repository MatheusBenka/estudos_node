const mongoose = require('mongoose');
const Product = mongoose.model("Product");

module.exports={
    async list(page){
       return await Product.paginate({}, { page:page , limit : 10 });       
    },
    async add(newProduct){                        
        return await Product.create(newProduct);
    },
    async find(id){        
        return await Product.findById(id);
    },    
    async update(idUProduct,uProduct){
        return await Product.findByIdAndUpdate(idUProduct,uProduct, {new : true});
    },
    async delete(id){
        await Product.findOneAndRemove(id); 
    }
};