import { Request, Response } from 'express';
import Contact from '../models/contact.model';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message submitted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};