const {validationResult} = require('express-validator');

const UserDTO = require('../dto/userDto.js');
const user = require('../model/userModel.js')

const createUser = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const userDto = new UserDTO(req.body);
    const obj = new user();
    res.status(201).json(obj.findOneById(userDto));
}

module.exports = {createUser};


