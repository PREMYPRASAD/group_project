const { db }= require("../config/config");
 

// const loginUser = async (req, res) => {
//   const { user_name, pass_word } = req.body;
//   console.log(user_name, pass_word);
 
//   try {
//     const result = await db.query(
//       "SELECT * FROM users WHERE user_name = $1 AND pass_word = $2",
//       [user_name, pass_word]
//     );
//     if (result && result.length > 0) {
//       res.status(200).json({ success: true, message: "Login credentials matched" });
//       console.log(result);
//       console.log(result);
//     } else {
//       res.status(401).json({ error: "Invalid username or password" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//     console.log(result);
//   }
// };
const loginUser = async (req, res) => {
  const { user_name, pass_word } = req.body;
  console.log(user_name, pass_word);
 
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE user_name = $1",
      [user_name]
    );
    if (result && result.length > 0) {
      const user = result[0];
      const passwordMatch = await bcrypt.compare(pass_word, user.pass_word); // compare the hashed passwords
      if (passwordMatch) {
        res.status(200).json({ success: true, message: "Login credentials matched" });
        console.log(result);
      } else {
        res.status(401).json({ error: "Invalid username or password" });
      }
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
    console.log(result);
  }
};

// const addUser = async (req, res) => {
//   const { user_name, pass_word } = req.body;

//   const hashedPassword = await bcrypt.hash(pass_word, 10);
//   try {
//     const result = await db.query(
//       "INSERT INTO users(user_name, pass_word) VALUES ($1, $2) RETURNING *",
//       [user_name, hashedPassword]
//     );
//     res.send({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// };
const addUser = async (req, res) => {
  const { user_name, pass_word } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(pass_word, 10); // hash the password
    const result = await db.query(
      "INSERT INTO users(user_name, pass_word) VALUES ($1, $2) RETURNING *",
      [user_name, hashedPassword] // store the hashed password in the database
    );
    res.send({ success: true });
  } catch (err) {
    console.error(err);
  }
}
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

