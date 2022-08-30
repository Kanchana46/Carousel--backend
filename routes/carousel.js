import express from 'express';
import { createPost, getCarousels, updatePost, deletePost, getPost } from '../controllers/carousel.js';

const router = express.Router();

router.get('/', getCarousels);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;

