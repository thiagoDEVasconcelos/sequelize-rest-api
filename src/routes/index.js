import express from 'express';
import pessoas from './pessoasRoutes.js';

export default app => {
    app.use(express.json(), pessoas)
}