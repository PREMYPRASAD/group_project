const { db }= require("../config/config");
 

const loginUser = async (req, res) => {
  const { user_name, pass_word } = req.body;
  console.log(user_name, pass_word);
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE user_name = $1 AND pass_word = $2",
      [user_name, pass_word]
    );
    if (result && result.length > 0) {
      res.status(200).json({ success: true, message: "Login credentials matched" });
      console.log(result);
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};


const addUser = async (req, res) => {
  const { user_name, pass_word } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users(user_name, pass_word) VALUES ($1, $2) RETURNING *",
      [user_name, pass_word]
    );
    res.send({ success: true });
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
   loginUser,
  getUserDetails
}

