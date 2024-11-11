import { connection } from "../db.js";

export const getDealers = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM Dealer");
    console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.send(500).status(500);
  }
};

export const createDealer = async (req, res) => {
  try {
    const { ci, name, email, password, phone, address } = req.body;
    if (!ci || !name || !email || !password || !phone || !address) {
      console.log(req.body);
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const [result] = await connection.query(
      `INSERT INTO Dealer(ci, name, email, password, phone, address) VALUES(?,?,?,?,?,?)`,
      [ci, name, email, password, phone, address]
    );

    if (result.affectedRows && result.affectedRows > 0) {
      return res.status(201).json({ message: "Dealer creado exitosamente" }); // Respuesta más clara
    } else {
      return res.status(500).json({ message: "No se pudo crear el dealer" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" }); // Asegura una respuesta en caso de error
  }
};

export const getDealer = async (req, res) => {
  try {
    const { ci } = req.params;
    const [result] = await connection.query(
      "SELECT * FROM Dealer WHERE ci = ?",
      [ci]
    );
    if (result.affectedRows && result.affectedRows === 0) {
      res.status(404).json(messagge);
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteDealer = async (req, res) => {
  try {
    const { ci } = req.params;
    const [result] = await connection.query(
      `DELETE FROM Dealer WHERE ci = ${ci}`
    );
    if (result.affectedRows && result.affectedRows > 0) {
      res.status(202).json({ messagge: "usuario eliminado" });
    } else {
      res.status(404).json(messagge);
    }
  } catch (error) {
    console.log(error);
  }
};