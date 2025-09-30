exports.index = (req, res) => {
  res.send("Welcome to the Ph.D. Students API!\n");
};

exports.show = (req, res) => {
  res.send(`Showing data for ID: ${req.params.id}\n`);
};

exports.store = (req, res) => {
  res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);
};

exports.update = (req, res) => {
  res.send(
    `Data updated for ID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}\n`
  );
};

exports.delete = (req, res) => {
  res.send(`Data deleted for ID: ${req.params.id}\n`);
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
};
>>>>>>> d0db2e3 (Multer)
>>>>>>> 5913d90 (crud with sql)
=======
};
>>>>>>> d0db2e3e61260da7834678ed5825d13082d6c409
