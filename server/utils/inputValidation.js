import { object, string, array, number } from 'joi';

/**
 * * Validate the input data for inserting the movie details
 */
const validateMovieInput = object({
    movieTitle: string().required(),
    plotSummary: string().required(),
    duration: string().required(),
    genre: array().items(string()),
    rating: number().required(),
    poster: string().required(),
    favoriteBy: number().required(),
    release: string().required(),
    cast: string().required(),
});


/**
 * * Validate the input data for updating the movie details
 */
const validateMovieUpdateData = object({
    movieTitle: string(),
    plotSummary: string(),
    duration: string(),
    genre: array().items(string()),
    rating: number(),
    poster: string(),
    release: string(),
    cast: string(),
    favoriteBy: number(),
});

/**
 * * Validate the input data for inserting batch movie details
 */
const moviesBatchInsertInput = array().items({
    movieTitle: string().required(),
    plotSummary: string().required(),
    duration: string().required(),
    genre: array().items(string()),
    rating: number().required(),
    poster: string().required(),
    favoriteBy: number().required(),
    release: string().required(),
    cast: string().required(),
}).required();

/**
 * * Validate the login input data
 */

const loginInputValidation = object({
    email: string().email().required(),
    password: string().required(),
})

/**
 * * Validate the registration input data
 */

const registrationInputValidation = object({
    userName: string().required(),
    email: string().email().required(),
    password: string().required(),
    role: string(),
})


/**
 * * Validate the refresh token input data
 */

const refreshTokenInputValidation = object({
    token: string().required(),
})

export default {
    validateMovieInput,
    validateMovieUpdateData,
    loginInputValidation,
    refreshTokenInputValidation,
    registrationInputValidation,
    moviesBatchInsertInput
}