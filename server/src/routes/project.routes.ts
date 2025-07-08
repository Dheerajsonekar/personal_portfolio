import express from 'express';
import {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
} from '../controllers/project.controller';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);


export default router;