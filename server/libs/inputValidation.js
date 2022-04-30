const joi = require("joi");

/**
 * * Validate the input data for inserting the movie details
 */
const validateMovieInput = joi.object({
  movieTitle: joi.string().required(),
  plotSummary: joi.string().required(),
  duration: joi.string().required(),
  genre: joi.array().items(joi.string()),
  rating: joi.number().required(),
  poster: joi.string().required(),
  favoriteBy: joi.number().required(),
  release: joi.string().required(),
  cast: joi.string().required(),
});

/**
 * * Validate the input data for updating the movie details
 */
const validateMovieUpdateData = joi.object({
  movieTitle: joi.string(),
  plotSummary: joi.string(),
  duration: joi.string(),
  genre: joi.array().items(joi.string()),
  rating: joi.number(),
  poster: joi.string(),
  release: joi.string(),
  cast: joi.string(),
  favoriteBy: joi.number(),
});

/**
 * * Validate the input data for inserting batch movie details
 */
const moviesBatchInsertInput = joi
  .array()
  .items({
    movieTitle: joi.string().required(),
    plotSummary: joi.string().required(),
    duration: joi.string().required(),
    genre: joi.array().items(joi.string()),
    rating: joi.number().required(),
    poster: joi.string().required(),
    favoriteBy: joi.number().required(),
    release: joi.string().required(),
    cast: joi.string().required(),
  })
  .required();

/**
 * * Validate the login input data
 */

const loginInputValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

/**
 * * Validate the registration input data
 */

const registrationInputValidation = joi.object({
  userName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  role: joi.string(),
});

/**
 * * Validate the refresh token input data
 */

const refreshTokenInputValidation = joi.object({
  token: joi.string().required(),
});

module.exports = {
  validateMovieInput,
  validateMovieUpdateData,
  loginInputValidation,
  refreshTokenInputValidation,
  registrationInputValidation,
  moviesBatchInsertInput,
};
