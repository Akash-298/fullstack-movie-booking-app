import express from "express";
import { addMovie, getAllMovies, getMovieById } from "../controller/movie-controller";

const movieRouter = express.Router();
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);

export default movieRouter;