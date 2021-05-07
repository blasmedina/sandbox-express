export class IndexController {
  static getIndex(_req, res) {
    return res.json({
      msg: 'Hello World!!',
    });
  }
}
