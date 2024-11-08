const validateRequest = (req, res, next) => {
  const { body } = req;

  // Validate that required fields are present
  if (!body.name || !body.email || !body.password || !body.role) {
      return res.status(400).json({ error: 'Name, email, password, and role are required' });
  }

  next();
};

module.exports = validateRequest;