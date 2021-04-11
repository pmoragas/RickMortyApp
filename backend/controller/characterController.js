//Import Bio Model
Char = require('./characterModel');


exports.index = function (req, res) {
    Char.get(function (err, char) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Char Successfully!",
            data: char
        });
    });
};

//For creating new bio
exports.add = function (req, res) {
    var char = new Char();
    char.id = req.body.id;
    char.name = req.body.name;
    char.fav = req.body.fav;

    char.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New Bio Added!",
            data: char
        });
    });
};


exports.view = function (req, res) {
    Char.findById(req.params.id, function (err, char) {
        if (err)
            res.send(err);
        res.json({
            message: 'Char Details',
            data: char
        });
    });
};

// Update Char
exports.update = function (req, res) {
    Char.findById(req.params.id, function (err, char) {
        if (err)
            res.send(err);
        char.name = char.body.name ? char.body.name : char.name;
        char.fav = req.body.fav;
//save and check errors
        char.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Char Updated Successfully",
                data: char
            });
        });
    });
};

// Delete Bio
exports.delete = function (req, res) {
    Char.deleteOne({
        _id: req.params.id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Char Deleted'
        })
    })
}