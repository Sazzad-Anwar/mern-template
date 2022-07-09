/*
* * @Description: Get all error logs
* * @Route: /api/v1/api/error-logs
* * @Method: GET
! * @Access: Super Admin
*/

const expressAsyncHandler = require("express-async-handler");
const Errors = require('../../models/errorLogs');

const getAllErrorLogs = expressAsyncHandler(async (req, res) => {
    let { pageSize, page, startDate, endDate } = req.query;

    let errors;

    if ((startDate && startDate !== 'Invalid Date') && (endDate && endDate !== 'Invalid Date')) {
        errors = await Errors.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate
            }
        })
            .sort({ createdAt: -1 })
            .limit(pageSize ? parseInt(pageSize) : 20)
            .skip(
                page ? (parseInt(page) < 0 ? 1 : parseInt(page) - 1) * parseInt(pageSize) : 0
            ).lean()
    } else {
        errors = await Errors.find({})
            .sort({ createdAt: -1 })
            .limit(pageSize ? parseInt(pageSize) : 20)
            .skip(
                page ? (parseInt(page) < 0 ? 1 : parseInt(page) - 1) * parseInt(pageSize) : 0
            ).lean();
    }


    res.status(200).json({
        status: 'success',
        data: errors,
        totalSize: await Errors.countDocuments(),
    });
});


module.exports = getAllErrorLogs;