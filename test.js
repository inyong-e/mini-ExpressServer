const models = require('./database/models');

const getOneUser = async() => {
  const id = 1;
  const user = await models.Users.findOne({where: {id:1}});
  console.log(user);
}

const getUsers = async() => {
  const users = await models.Users.findAll();
}
getOneUser();