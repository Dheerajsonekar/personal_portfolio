import { Request, Response } from 'express';
import Project from '../models/project.model';

export const getAllProjects = async (req: Request, res: Response) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
