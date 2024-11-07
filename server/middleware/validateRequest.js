const validateRequest = (req, res, next) => {
    const { body } = req;
  
    // Example: Validate that required fields are present
    if (!body.username || !body.password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
  
    next();
  };
  
  module.exports = validateRequest;