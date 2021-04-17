const Fav = require('../model/favModel');

// Get all Fav
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
    });
};

// Add Fav
exports.add = function (req, res) {
    var fav = new Fav(req.body);

    fav.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New Fav Added!",
            data: fav
        });
    });
};

// Delete Fav
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