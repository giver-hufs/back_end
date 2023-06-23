import University from "../models/University";
export const getUniversityCode = async (req, res) => {
  try {
    const universityName = req.params.universityName;

    const university = await University.findOne({ name: universityName });

    const universityCode = university.code;
    return res.status(200).json(universityCode);
  } catch (err) {
    return res.status(400).json("CANNOT_GET_UNIVERSITY_CODE");
  }
};
