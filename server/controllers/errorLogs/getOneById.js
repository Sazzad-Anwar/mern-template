/*
* * @Description: Get error log by ID
* * @Route: /api/v1/api/error-logs/:id
* * @Method: GET
! * @Access: Super Admin
*/

const expressAsyncHandler = require("express-async-handler");
const Errors = require('../../models/errorLogs');

const getOneById = expressAsyncHandler(async (req, res) => {
    let { id } = req.params;
    let error = await Errors.findById(id).lean();

    res.status(200).json({
        status: 'success',
        data: error,
    });
});

module.exports = getOneById;