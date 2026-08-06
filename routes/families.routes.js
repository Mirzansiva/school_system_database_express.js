import express from 'express';
import { index, create, store, destroyPage, show, edit, update, destroy } from '../controller/families.controller.js';

const router = express.Router();

router.get('/', index);
router.get('/create', create);
router.post('/', store);
router.get('/:id/destroy', destroyPage);
router.get('/:id', show);
router.get('/:id/edit', edit);
router.post('/:id', update);
router.post('/:id/delete', destroy);

export default router;