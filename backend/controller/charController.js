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
    });

    const requestOptions = {
        url: 'https://rickandmortyapi.com/api/character',
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

exports.one = function (req, res) {
    let favs;
    Fav.get(function (err, fav) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        favs = fav;
    });

    const url = `https://rickandmortyapi.com/api/character/${req.params.char_id}`;
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
