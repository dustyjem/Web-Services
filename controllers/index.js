const homePage = (req, res, next) => {
    res.json('Mariah Okeke');
};

const anotherPage = (req, res, next) => {
    res.json('This is another page');
};


module.exports = {homePage, anotherPage}