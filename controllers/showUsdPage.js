module.exports = (req, res) => {
    if(req.session.userId){
      return  res.render('Usd');
    }

    res.redirect('/login');
}