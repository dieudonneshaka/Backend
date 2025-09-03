import express from 'express';
import { createActivity, getActivities } from '../controllers/activityController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createActivity);
router.get('/', getActivities);

export default router;
