import { db } from "../database/database.connection.js";

export function getCakeByName(name) {
  return db.query(`SELECT * FROM cakes WHERE name = $1;`, [name]);
}

export async function insertCake(name, image, price, description) {
  return db.query(
    `
      INSERT INTO cakes (name, image, price, description)
          VALUES ($1, $2, $3, $4);
  `,
    [name, image, price, description]
  );
}
