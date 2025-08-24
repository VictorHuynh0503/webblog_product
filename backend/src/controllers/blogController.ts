import { Request, Response } from 'express';
import { supabase } from '../services/supabaseService';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('analytics')
      .select('*')
      .order('date', { ascending: false })
      .limit(30);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching analytics' });
  }
};
