const movies = [

    {
        id : 1,
        name : 'Signs',
        director : "M Night Shyamalan",
        rating : 7.1
    },
    {
        id : 2,
        name : 'Fargo',
        director : "Coen Brothers",
        rating : 7.5
    }

]

exports.findAll = (req, res, next) => {
    return res.json(movies);
    next();
}