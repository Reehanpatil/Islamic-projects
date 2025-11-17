const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { success, error } = require("../utils");

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return success(res, "User registered successfully", { user }, 201);
  } catch (err) {
    return error(res, err.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return error(res, "User not found", 400);

    const match = await user.comparePassword(password);
    if (!match) return error(res, "Invalid password", 400);

    const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "7d" });

    return success(res, "Login successful", { token, user });
  } catch (err) {
    return error(res, err.message);
  }
};
