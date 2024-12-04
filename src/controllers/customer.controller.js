exports.get = (req,res)=>{
    res.send("Get customers")
}
exports.getName = (req,res)=>{
    res.send("Edit customer Name:"+ req.params.name)
}
exports.editName = (req,res)=>{
    res.send("Edit name customer"=req.params.id)
}
exports.create = (req,res)=>{
    res.send("New customer")
}
exports.getById = (req,res)=>{
    res.send("Customer id:"+req.params.id)
}
exports.patch = (req,res)=>{
    res.send("Patch customer id:"+req.params.id)
}
exports.rmCustommer = (req,res)=>{
    res.send("Delete customer id"+req.params.id)
}