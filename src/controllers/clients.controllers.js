import { insertClient, getClientByIdQuery, getOrdersByClientId } from "../repositories/clients.repositories.js";

export async function createClient(req, res) {
  const { name, address, phone } = req.body;

  try {
    await insertClient(name, address, phone);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getOrdersByClient(req, res) {
  const { id } = req.params;

  try {
    const existingClient = await getClientByIdQuery(id);
    if (existingClient.rowCount === 0) return res.status(404).send({ message: "Client not found" });

    const existingOrders = await getOrdersByClientId(id);
    if (existingOrders.rows.length === 0) return res.status(404).send({ message: "No orders found" });

    const orders = existingOrders.rows.map((order) => ({
      orderId: order.orderId,
      quantity: order.quantity,
      createdAt: order.createdAt,
      totalPrice: parseFloat(order.totalPrice),
      cakeName: order.cakeName,
    }));

    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
