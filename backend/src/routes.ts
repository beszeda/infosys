import { Router } from 'express';
import { FeladatController } from './controller/FeladatController';
import { GepController } from './controller/GepController';
import { MunkaController } from './controller/MunkaController';
import { MunkasController } from './controller/MunkasController';

export function getRouter(): Router {
    const router = Router();
    
    const feladat = new FeladatController();
    const gep = new GepController();
    const munka = new MunkaController();
    const munkas = new MunkasController();
   
    router.get('/feladatok', feladat.getAll);
    router.get('/feladatok/:id', feladat.getOne);
    router.post('/feladatok', feladat.create);
    router.put('/feladatok', feladat.update);
    router.delete('/feladatok/:id', feladat.delete);

    router.get('/gepek', gep.getAll);
    router.get('/gepek/:id', gep.getOne);
    router.post('/gepek', gep.create);
    router.put('/gepek', gep.update);
    router.delete('/gepek/:id', gep.delete);

    router.get('/munkak', munka.getAll);
    router.get('/munkak/:id', munka.getOne);
    router.post('/munkak', munka.create);
    router.put('/munkak', munka.update);
    router.delete('/munkak/:id', munka.delete);

    router.get('/munkasok', munkas.getAll);
    router.get('/munkasok/:id', munkas.getOne);
    router.post('/munkasok', munkas.create);
    router.put('/munkasok', munkas.update);
    router.delete('/munkasok/:id', munkas.delete);

   
    return router;
}

