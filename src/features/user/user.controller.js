
import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';

export default class UserController {
 
  signUp(req, res) {
    const {
      name,
      email,
      password,
      type,
    } = req.body;
    const user = UserModel.signUp(
      name,
      email,
      password,
      type
    );
    res.status(201).send(user);
  }

  signIn(req, res) {
    const result = UserModel.signIn(
      req.body.email,
      req.body.password
    );
    if (!result) {
      return res
        .status(400)
        .send('Incorrect Credentials');
    } else {
      const token=jwt.sign(
        {
          userID:result.id,
          email:result.email
        },
          "p8uh2jjb47bnwUPYka5vSmvxgcyOFmAk858DZqqe+yo=",
        {
          expiresIn:"1h"
        }
      )
      return res.status(200).send(token);
    }
  }
   getAllUsers(req,res){
          const users =UserModel .getAll();
          res.status(200).send(users);
      }
}
