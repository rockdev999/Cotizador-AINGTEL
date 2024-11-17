import { connection } from "../db.js";

export const getCategories = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM Category");
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.send(500).status(500);
  }
};
