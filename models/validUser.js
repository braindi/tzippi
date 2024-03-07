// import Joi from "joi";


// exports.validCreateUser = (bodyData) => {
//     let joiUser = Joi.object({
//         name: Joi.string().min(2).required(),
//         email: Joi.string().email().required(),
//         phone: Joi.string().min(10).required(),
//     })
//     return joiUser.validate(bodyData)
// }


const Joi = require('joi');

// הגדרת פונקציה
exports.validCreateUser = (bodyData) => {
  // הגדרת Joi schema
  let joiUser = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
  });

  // אימות נתונים
  return joiUser.validate(bodyData);
};
