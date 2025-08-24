import { Post } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const createPost = async (formData: FormData): Promise<Post> => {
  const response = await fetch(`${API_URL}/api/posts`, {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  
  return response.json();
};
