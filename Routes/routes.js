import { Router } from 'express';
import { topicksIndex } from '../Controllers/MoviesController';

const router = Router();

router.get('/topicks', topicksIndex);

export default router