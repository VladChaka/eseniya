const express = require('express'),
      core = require('../core/index'),
      router = express.Router();      

router.post('/registration', (req, res) => {
    const data = {
        name: req.body.name,
        surname: req.body.surname,
        patronymic: req.body.patronymic,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };   

    core.administrationDataService.registration(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.post('/authentication', (req, res) => {
    const data = {
            username: req.body.login || "",
            password: req.body.password || ""
          };
          
    core.administrationDataService.authentication(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

router.get('/administration', (req, res) => {
    core.administrationDataService.getAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.delete('/administration/:id', (req, res) => {
    let id = { _id: req.params.id}
    core.administrationDataService.delete(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

/**
 * Article
 */
router.post('/article', (req, res) => {
    const data = {
        section: req.body.section,
        content: req.body.content,
        image: {
            src: req.body.image
        }
    };

    core.articleDataService.add(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.put('/article', (req, res) => {
    const data = {
        _id: req.body.id,
        section: req.body.section,
        content: req.body.content,
        image: {
            src: req.body.image
        }
    };

    core.articleDataService.update(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.get('/article', (req, res) => {
    core.articleDataService.getOne()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.delete('/article', (req, res) => {
    const id = { _id: req.body.id };
    core.articleDataService.delete(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

/**
 * City
 */
router.post('/city', (req, res) => {
    const data = {
        name: req.body.name,
        population: req.body.population,
        count_landmarks: req.body.count_landmarks,
        age: req.body.age,
        link: req.body.link,
        img: req.body.img,
        location: req.body.location
    };

    core.cityDataService.add(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.put('/city', (req, res) => {
    const data = {
        _id: req.body.id,
        name: req.body.name,
        count_landmarks: req.body.count_landmarks,
        age: req.body.age,
        location: {
            lat: req.body.lat,
            lng: req.body.lng,
            info: req.body.info
        },
        list_landmarks: {
            id: req.body.id_landmark,
            name: req.body.name_landmark
        }
    };

    core.cityDataService.update(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.get('/city', (req, res) => {
    core.cityDataService.getAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.delete('/city/:id', (req, res) => {
    const id = { _id: req.params.id };
    
    core.cityDataService.delete(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

/**
 * Landmark
 */
router.post('/landmark', (req, res) => {
    const data = {
        name: req.body.name,
        number_places: req.body.number_places,
        year_foundation: req.body.year_foundation,
        opening_time: req.body.opening_time,
        city_id: req.body.city_id,
        link: req.body.link,
        img: req.body.img
    };

    core.landmarkDataService.add(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.post('/landmark-city', (req, res) => {
    const id = { city_id: req.body.id };

    core.landmarkDataService.getByCity(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.put('/landmark', (req, res) => {
    const data = {
        _id: req.body.id,
        name: req.body.name,
        number_places: req.body.number_places,
        year_foundation: req.body.year_foundation,
        opening_time: req.body.opening_time,
        id_article: req.body.id_article
    };

    core.landmarkDataService.update(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.get('/landmark', (req, res) => {
    core.landmarkDataService.getAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.delete('/landmark/:id', (req, res) => {
    const id = { _id: req.params.id };
    
    core.landmarkDataService.delete(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

/**
 * News
 */
router.post('/news', (req, res) => {
    const email = { email: req.body.email };
    
    core.newsDataService.add(email)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.get('/news', (req, res) => {
    core.newsDataService.getAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

/**
 * Contakt
 */
router.post('/contakt', (req, res) => {
    const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    };
    
    core.contaktDataService.add(data)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});
router.get('/contakt', (req, res) => {
    core.contaktDataService.getAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(err.status || 500).json({ message: err.message }));
});

module.exports = router;