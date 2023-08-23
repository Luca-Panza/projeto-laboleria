import { insertClient } from "../repositories/clients.repositories.js";

export async function createClient(req, res) {
  const { name, address, phone } = req.body;

  try {
    await insertClient(name, address, phone);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
