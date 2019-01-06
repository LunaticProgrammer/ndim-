

module.exports = async (req, res) => {

  

   

      const data = req.body;
      res.render('popup', {

        data
      });
    }

