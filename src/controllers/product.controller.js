// functions ที่ทำงานตาม route
exports.get=(req, res)=>{
    res.send("Get customers here");
  }
exports.getById=(req, res)=>{
    res.send("Get products " + req.params.id);
  }
exports.create=(req, res)=>{
    res.send("Create products ");
}