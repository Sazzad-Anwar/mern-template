//@Description:Controller for main application
import asyncHandler from 'express-async-handler';

/*
* @Description: Controller for main application
*/

const test = asyncHandler(async (req, res) => {
    res.json({
        isSuccess: true,
        message: 'Hello World'
    })
});


export {
    test
}