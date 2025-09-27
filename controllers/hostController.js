const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home", currentPage: "addHome" });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes lists",
    })
  );
};
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, Rating, PhotoURL } = req.body;

  const home = new Home(houseName, price, location, Rating, PhotoURL);
  home.save();
  res.render("host/add", { pageTitle: "Home added successfully" });
};
