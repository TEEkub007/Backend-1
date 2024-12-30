const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.get = async (req, res) => {
  const products = await prisma.product.findMany({
    where:{
      id:parseInt(id),
    },
    include:{
      Category:true,
    },
  });
  res.json(products);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
    include:{
      Category:true,
    },
  });
  res.json(product);
};

exports.create = async (req, res) => {
  const { category_id, name, price, description, unit_in_stock } = req.body;
  const product = await prisma.product.create({
    data: {
      category_id,
      name,
      price,
      description,
      unit_in_stock,
    },
  });
  res.json(product);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { category_id, name, price, description, unit_in_stock } = req.body;
  const product = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      category_id,
      name,
      price,
      description,
      unit_in_stock,
    },
  });
  res.json(product);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(product);
};
exports.getBystock = async (req, res) => {
  try {
    const stock = parseInt(req.params.stock, 10); // แปลงค่า stock เป็นตัวเลข
    if (isNaN(stock)) {
      return res.status(400).json({ error: 'Invalid stock parameter' });
    }

    // ใช้ Prisma สำหรับค้นหา products
    const filteredProducts = await prisma.product.findMany({
      where: {
        unit_in_stock: stock,
      },
    });

    // ส่งข้อมูลกลับไปยัง Client
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};