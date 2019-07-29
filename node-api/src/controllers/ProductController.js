const service = require('../Services/ProductService')

module.exports={
    async index(req,res){        
        return res.json(await service.list());
    },
    async store(req, res){        
        const storedP = await service.add(req.body);    

        if(storedP == undefined)
        {
            return res.status(404).json({'Mensagem':'Erro ao adicionar produto'});            
        }
        else
        {
            return res.json(storedP);
        }        
    },
    async show(req, res){        
        const detailedProduct = await service.find(req.params.id);

        if(detailedProduct == undefined)
        {       
            return res.status(404).json({'Mensagem':'Produto não encontrado'});
        }else
        {
            return res.status(200).json(detailedProduct);
        }           
    },
    async update(req,res){                
        const updatedP = await service.update(req.params.id,req.body);

        if(updatedP == undefined)
        {
            return res.status(500).json({'Mensagem':'Produto não encontrado'});            
        }else
        {
            return res.status(200).json(updatedP);
        }                  
    },
    async delete(req,res){
        await service.delete(req.params.id);
        res.status = 200;
        return res.send();
    }
};