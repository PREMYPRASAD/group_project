const { db }= require("../config/config");
 

const addUser = async (req, res) => {

  const { user_name, pass_word } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users(user_name, pass_word) VALUES ($1, $2) RETURNING *",
      [user_name, pass_word]
    );
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};


const getUserDetails = async (req, res) =>{
  await db.query("SELECT * FROM users " )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error " });
    });
  }


         
module.exports = {
   addUser,
  getUserDetails
}

