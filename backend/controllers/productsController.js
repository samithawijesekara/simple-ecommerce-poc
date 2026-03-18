const mockData = [
  {
    id: 1,
    name: "Laptop",
    price: 1500,
  },
  {
    id: 2,
    name: "Headphones",
    price: 200,
  },
];

const cartItems = [];

const getProductList = (req, res) => {
  try {
    res.json(mockData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCartItems = (req, res) => {
  try {
    const { id } = req.body;
    const cartItem = mockData.filter((item) => item.id === id);
    console.log("Cart item : ", cartItem[0]);

    var obj = {};
    obj["id"] = cartItem[0].id;
    obj["name"] = cartItem[0].name;
    obj["price"] = cartItem[0].price;
    cartItems.push(obj);

    console.log("Cart items : ", cartItems);
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCartList = (req, res) => {
  try {
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProductList, getCartList, addCartItems };
