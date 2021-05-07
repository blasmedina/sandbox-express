const IndexController = {
  getIndex: (req, res) =>
    res.json({
      msg: 'Hello World!!',
    }),
};

module.exports = Object.freeze(IndexController);
