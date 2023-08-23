import { getCakeById, getUserById, insertOrder } from "../repositories/orders.repositories.js";

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
