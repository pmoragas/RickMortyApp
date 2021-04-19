const Fav = require('../model/favModel');

exports.index = function (req, res) {
    Fav.get(function (err, fav) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Fav Successfully!",
            data: fav
        });
    }, req.user.id);
};

exports.add = function (req, res) {
    var fav = new Fav(req.body);
    fav.user_id = req.user.id;

    fav.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New Fav Added!",
            data: fav
        });
    });
};

exports.delete = function (req, res) {
    Fav.deleteOne({
        char_id: req.params.fav_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Fav Deleted'
        })
    })
}