const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes lists",
    })
  );
};

exports.getBooking = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/booking", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes lists",
    })
  );
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Favourite List",
    })
  );
};
