import { getCakeById, getUserById, insertOrder, getOrdersByDate, getOrderById } from "../repositories/orders.repositories.js";

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  try {
    const existingCake = await getCakeById(cakeId);
    if (existingCake.rowCount === 0) return res.status(404).send({ message: "Cake not found" });

    const existingUser = await getUserById(clientId);
    if (existingUser.rowCount === 0) return res.status(404).send({ message: "User not found" });

    await insertOrder(clientId, cakeId, quantity, totalPrice);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrders(req, res) {
  const { date } = req.query;

  try {
    const existingOrders = await getOrdersByDate(date);
    if (existingOrders.length === 0) return res.status(404).send([]);

    const orders = existingOrders.map((order) => {
      return {
        client: {
          id: order.clientId,
          name: order.clientName,
          address: order.clientAddress,
          phone: order.clientPhone,
        },
        cake: {
          id: order.cakeId,
          name: order.cakeName,
          price: parseFloat(order.cakePrice),
          description: order.cakeDescription,
          image: order.cakeImage,
        },
        orderId: order.orderId,
        createdAt: order.createdAt,
        quantity: order.quantity,
        totalPrice: parseFloat(order.totalPrice),
      };
    });

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrdersById(req, res) {
  const { id } = req.params;

  try {
    const existingOrder = await getOrderById(id);
    if (existingOrder.rows.length === 0) return res.status(404).send({ message: "Order not found" });

    const order = existingOrder.rows[0];

    const orderInfo = {
      client: {
        id: order.clientId,
        name: order.clientName,
        address: order.clientAddress,
        phone: order.clientPhone,
      },
      cake: {
        id: order.cakeId,
        name: order.cakeName,
        price: parseFloat(order.cakePrice),
        description: order.cakeDescription,
        image: order.cakeImage,
      },
      orderId: order.orderId,
      createdAt: order.createdAt,
      quantity: order.quantity,
      totalPrice: parseFloat(order.totalPrice),
    };

    res.status(200).send(orderInfo);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
