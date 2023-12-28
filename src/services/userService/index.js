import User from "../../models/userModel";
import Contact from "../../models/Contact";
import { hashPassword } from "../../../helpers/index.js";

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

      const existingUser = await userModel.findOne({ email });

      if (existingUser) {
        return {
          status: 401
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
      const user = await userModel.findOne({ email: email });

      if (user) {
        const isMatched = await comparePassword(password, userLogin.password);

        if (!isMatched) {
          return {
            status: 400
          }
        }
        else {
          const token = jwt.sign(
            { userId: userLogin._id },
            process.env.SECRET_KEY, {
            expiresIn: "*",
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
