import ContentLocational from "../models/ContentLocational";

export const getRequests = async (req, res) => {
  try {
    const universityCode = req.params.universityCode;
    const contents = await ContentLocational.find({
      universityCode: Number(universityCode),
    });
    return res.status(200).json(contents);
  } catch (err) {
    return res.status(400).json("FAIL_TO_GET_REQUESTS");
  }
};
