const blockModel=require('../models/blockModel')
const axios=require("axios")


const getBlockData= async function (req,res){
    try{
        let getData={
            method:"get",
            url:'https://api.coincap.io/v2/assets'
        }
        let result= await axios(getData)
        let store=result.data.data
        let sorted=store.sort(function(b,a){return b.changePercent24Hr-a.changePercent24Hr})
          await  blockModel.deleteMany()
        let save=await blockModel.create(sorted)
        return res.status(201).send({ count:save.length,data:save})

    }
    catch(err){
        return res.status(500).send({msg:err.message})
    }
}
module.exports.getBlockData=getBlockData