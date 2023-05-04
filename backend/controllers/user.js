const { db } = require("../config/config");
 
const addUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);
  try {
    const newuser = await db.query
      ('INSERT INTO users (username, password) VALUES ($1, $2)', { username, password });

    console.log('add data', newuser);

    res.send({ message: 'Registration successful' });
  }
    
  catch (err) {
    console.error(err);
    res.send("Error " + err);
    
  }
}
const getUserDetails = async (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    try {
        const result = await db.query
            ('SELECT * FROM Users WHERE username=${username} AND password = ${password}', { username, password });

      console.log('login data', result);
      if (result.length > 0)
      {
        req.session.user = result[0];
        
        console.log('req', req.session.user);
        
        res.send(result[0]);
       
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
      
    }
    catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  };

         
module.exports = {
  addUser,
    getUserDetails
} 
