//Import Bio Model
const request = require('request');
const Fav = require('../model/favModel');

exports.index = function (req, res) {
    let favs;

    Fav.get(function (err, fav) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        favs = fav;
    }, req.user.id);

    const requestOptions = {
        url: process.env.RICK_AND_MORTY_OFFICIAL_API,
        method: 'GET',
        json: {},
        qs: {
          offset: 100
        }
      };

    request(requestOptions, (err, response, body) => {
        if (err) {
            console.log(err);
        } else if (response.statusCode === 200) {
            const characters = body.results;

            characters.forEach(char => {
                char.fav = getCharacterFav(char.id, favs);
            });

            res.send(characters);
        } else {
            console.log(response.statusCode);
        }
    });
};

exports.find = function (req, res) {
    let favs;
    Fav.get(function (err, fav) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        favs = fav;
    }, req.user.id);

    const url = `${process.env.RICK_AND_MORTY_OFFICIAL_API}/${req.params.char_id}`;
    const requestOptions = {
        url: url,
        method: 'GET',
        json: {},
        qs: {
          offset: 20
        }
      };

    request(requestOptions, (err, response, body) => {
        if (err) {
            console.log(err);
        } else if (response.statusCode === 200) {
            const character = body;
            character.fav = getCharacterFav(character.id, favs);

            res.send(character);
        } else {
            console.log(response.statusCode);
        }
    });
};

const getCharacterFav = (id, favs) => {
    return favs.find(item => {
        return item.char_id === id;
    }) !== undefined;
}
