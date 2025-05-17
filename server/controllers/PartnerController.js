const { Responder } = require("../Responder");
const { Partners, Points } = require("../storage/models");

class PartnerController {
  async get_all(req, res, next) {
    try {
       const partners = await Partners.findAll({
        order: [["id", "DESC"], [Points, "id", "ASC"]], // "ASC" || "DESC",
        include: Points
       });
       res.json({ partners });
    } catch (e) {
      console.log(e.message);
      res.json(Responder.internal())
    }
  }
  async get_one(req, res, next) {
    try {
      const {id} = req.params
       const partner = await Partners.findOne({
          where: {id},
          include: Points,
          order: [[Points, "id", "ASC"]]
       });
       res.json({ partner });
    } catch (e) {
      console.log(e.message);
      res.json(Responder.internal())
    }
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
