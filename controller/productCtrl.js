const products_details = [];

const saveProduct = (req, res) => {
  console.log(req.body);
  const {
    id,
    product_name,
    product_code,
    category,
    manufacturer,
    marketing,
    date_of_manufacturing,
  } = req.body;

  if (products_details[id]) {
    return res.status(400).send("Product already exists");
  }

  if (
    id &&
    product_name &&
    product_code &&
    category &&
    manufacturer &&
    marketing &&
    date_of_manufacturing
  ) {
    products_details.push({
      id,
      product_name,
      product_code,
      category,
      manufacturer,
      marketing,
      date_of_manufacturing,
    });
    res.status(200).json({
      message: "Product saved successfully",
    });
  } else {
    res.status(400).send("All fields are required");
  }
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products_details.find((product) => product.id === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products_details.findIndex((product) => product.id === id);
  if (index !== -1) {
    products_details.splice(index, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = {
  saveProduct,
  getProduct,
  deleteProduct,
};
