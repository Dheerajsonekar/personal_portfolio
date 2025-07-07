import express from 'express';
import {
  getAllProjects,
  createProject,
  deleteProject,
} from '../controllers/project.controller';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);

export default router;