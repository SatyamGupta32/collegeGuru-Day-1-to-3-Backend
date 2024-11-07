// server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err); 
    const errorMessage = process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message;
  
    return res.status(500).json({ error: errorMessage });
  };
  
  module.exports = errorHandler;
  