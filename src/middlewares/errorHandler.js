export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  if (status === 404) {
    return res.status(404).json({
      status: 404,
      message: err.message || 'Contact not found',
    });
  }

  res.status(status).json({
    status,
    message: err.message || 'Something went wrong',
    errors: err.errors || null,
    data: err.message,
  });
};
