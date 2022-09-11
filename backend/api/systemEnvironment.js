module.exports = () => {
    const controller = {};
  
    controller.getSystemEnvironment = (req, res) => res.status(200).json(process.env);
  
    return controller;
  }