import Joi from "joi";

const UpdateProductValidation = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "O campo primeiro nome não pode ser vazio",
    "string.required": "O campo primeiro nome é obrigatório",
  }),
  type: Joi.string().required().messages({
    "string.empty": "O campo sobrenome não pode ser vazio",
    "string.required": "O campo sobrenome é obrigatório",
  }),
  price: Joi.number().required().messages({
    "date.empty": "O campo date de aniversário é obrigatório",
    "any.required": "O campo date de aniversário é obrigatório",
  }),
});

export default UpdateProductValidation;
