import { getCakeByName, insertCake } from "../repositories/cakes.repositories.js";

export async function createCake(req, res) {
  const { name, image, price, description } = req.body;

  try {
    const existingCake = await getCakeByName(name);
    if (existingCake.rowCount === 1) return res.status(409).send({ message: "Cake already exists" });

    await insertCake(name, image, price, description);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
