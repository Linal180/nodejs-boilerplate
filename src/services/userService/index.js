import jwt from 'jsonwebtoken';
import User from "../../models/userModel/index.js";
import Contact from "../../models/Contact/index.js";
import { hashPassword, comparePassword } from "../../helpers/index.js";

class UserService {
  constructor() { }

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error(`Error in getUserById service: ${error.message}`);
    }
  }

  async createUser(userData) {
    try {
      const {
        firstName, lastName, email, password, telephone, zipCode,
        city, street, houseNumber
      } = userData;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return {
          status: 400
        }
      } else {
        const hashedPassword = await hashPassword(password);

        const user = await new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        }).save();

        const contact = await new Contact({
          userId: user._id,
          telephone,
          zipCode,
          city,
          street,
          houseNumber,
        }).save();

        return {
          status: 201
        };
      }
    } catch (error) {
      throw new Error(`Error in createUser service: ${error.message}`);
    }
  }

  async signIn(credentials) {
    try {
      const { email, password } = credentials;
      const user = await User.findOne({ email: email });

      if (user) {
        const isMatched = await comparePassword(password, user.password);

        if (!isMatched) {
          return {
            status: 400
          }
        }
        else {
          const token = jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24 * 365,
          });

          return {
            status: 200, token
          }
        }
      }
      else {
        return { status: 404 }
      }
    } catch (error) {
      console.log(error.message);
      return { status: 500 }
    }
  }
}

export default new UserService();
