const index =
    function (req, res, next) {
        res.render('index', { title: 'Mobile Store' });
    };

module.exports={
    index
};