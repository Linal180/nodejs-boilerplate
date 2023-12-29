import UserService from '../../services/userService/index.js'
import {
  REGISTER_SUCCESSFUL, USER_REGISTRATION_FAILED, USER_ALREADY_EXIST, USER_NOT_FOUND,
  WRONG_CREDENTIALS, USER_LOG_IN_FAILED, USER_LOGGED_IN_SUCCESSFUL
} from '../../constant/index.js';

export const signUp = async (req, res) => {
  try {
    const userData = req.body;
    const response = await UserService.createUser(userData)

    if (response.status === 400) {
      return res.status(400).json({ message: USER_ALREADY_EXIST });
    }

    res.status(201).json({ message: REGISTER_SUCCESSFUL });
  } catch (error) {
    res.status(500).json({ message: USER_REGISTRATION_FAILED });
  }
}

export const signIn = async (req, res) => {
  try {
    const credentials = req.body;
    const response = await UserService.signIn(credentials)

    if (response.status === 404) {
      res.status(404).json({ message: USER_NOT_FOUND });
    } else if (response.status === 400) {
      res.status(400).json({ message: WRONG_CREDENTIALS });
    } else {
      res.status(201).json({ token: response.token, message: USER_LOGGED_IN_SUCCESSFUL });
    }
  } catch (error) {
    res.status(500).json({ message: USER_LOG_IN_FAILED });
  }
}
