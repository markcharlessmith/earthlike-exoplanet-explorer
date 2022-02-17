const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.get('/',
  starWarsController.getCharacters,
  (req, res) => res.status(200).json([])
);

router.get('/species',
  starWarsController.getSpecies,
  (req, res) => res.status(200).json({})
);

router.get('/homeworld',
  starWarsController.getHomeworld,
  (req, res) => res.status(200).json({})
);

router.get('/film',
  starWarsController.getFilm,
  (req, res) => res.status(200).json({})
);

router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json({})
);

module.exports = router;