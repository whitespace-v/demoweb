const { Responder } = require("../Responder");
const { Partners } = require("../storage/models");

class PartnerController {
  async get_all(req, res, next) {
    const partners = await Partners.findAll();
    res.json({ partners });
  }
  async create(req, res, next) {
    try {
      console.log(req.body);
      
      const {contact, phone, email, reg_date} = req.body
      
      await Partners.create({
        contact,phone,email,reg_date
      })


      
    } catch (e) {
      console.log(e.message);
      res.json(Responder.internal())
    }
  }
}
module.exports = new PartnerController();
