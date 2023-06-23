import User from "../models/User";

export const handleSignup = async (req, res) => {
  const {
    id,
    password,
    year,
    nickname,
    name,
    phonenumber,
    universityCode,
    major,
  } = req.body;
  const exists = await User.findOne({ id });
  if (Boolean(exists)) {
    return res.status(400).json({ errorMessage: "ALREADY_TAKEN" });
  }
  try {
    await User.create({
      id,
      password,
      year,
      nickname,
      name,
      phonenumber,
      universityCode,
      major,
    });
    return res.status(200).json({ Message: "SIGNUP_SUCCESS" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: error.errmsg });
  }
};

export const handleLogin = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(400).json({ errorMessage: "NOT_EXIST" });
    }
    if (password !== user.password) {
      return res.status(400).json({ errorMessage: "PASSWORD_INCORRECT" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

export const editUserInfo = async (req, res) => {
  const {
    id,
    password,
    year,
    nickname,
    name,
    phonenumber,
    universityCode,
    major,
  } = req.body;
  try {
    await User.findOneAndUpdate(
      { id },
      { id, password, year, nickname, name, phonenumber, universityCode, major }
    );
    return res.status(200).json({ Message: "UPDATE_SUCCESS" });
  } catch (err) {
    return res.status(400).json({ errorMessage: "UPDATE_FAILED" });
  }
};
