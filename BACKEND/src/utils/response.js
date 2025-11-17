// /server/utils/response.js

exports.success = (res, message = "Success", data = {}, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

exports.error = (
  res,
  message = "Something went wrong",
  status = 400,
  details = null
) => {
  return res.status(status).json({
    success: false,
    message,
    details, // optional error info for debugging
  });
};
