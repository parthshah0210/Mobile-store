const aboutus =
    function (req, res, next) {
        res.render('about', { title: 'About us my site' });
    };

module.exports={
    aboutus
};