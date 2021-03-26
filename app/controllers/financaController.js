const financaService = require('../services/financaService');

const getDadosFinanca = async (req, res) => {
  try {
    const payloadResponse = await financaService.getFinancas();
    res.status(200).send(payloadResponse);
  } catch (error) {
    res.status(400).send({error});
  }
}

const postDadosFinanca = async (req, res) => {
  try {
    const requestPayload = req.body;
    const hasFinanca = await financaService.getFinancas();

    if(hasFinanca.length)
      throw new Error("Já tem financa criada");
      
    const payloadResponse = await financaService.postFinanca(requestPayload);

    res.status(201).send(payloadResponse);
    
  } catch (error) {
    res.status(400).send({error: error.message || error});
  }
}

const patchDadosFinanca = async (req, res) => {
  try {
    const requestPayload = req.body;
    await financaService.patchFinanca(requestPayload);
    res.status(200).send({response: "Dados atualizados!"});
  } catch (error) {
    res.status(400).send({error});
  } 
};

const deleteDadosFinanca = async (req, res) => {
  try {
    await financaService.deleteFinanca();
    res.status(200).send({response: "Dados deletados!"});
  } catch (error) {
    res.status(400).send({error});
  }
};



// INDEX
// GET /Financas
// router.get('/Financas',  (req, res, next) => {
//   Financa.find()
//     .populate('owner')
//     .then(places => res.json({ places: places }))
//     .catch(next)
// })

// // POST
// router.post('/places',  (req, res, next) => {
//   let placesData = req.body.place
//   placesData.place.owner = req.user.id
//   Place.create(placesData.place)
//     .then(place => res.status(201).json({place: place}))
//     .catch(next)
// })

// // UPDATE
// router.patch('/places/:id',  (req, res, next) => {
//   const id = req.params.id
//   const placeData = req.body.place
//   Place.findById(id)
//     .then(handle404)
//     .then(event => requireOwnership(req, event))
//     .then(() => Place.updateOne(placeData))
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

// // DESTROY
// router.delete('/places/:id',  (req, res, next) => {
//   const id = req.params.id
//   Place.findById(id)
//     .then(handle404)
//     .then(event => requireOwnership(req, event))
//     .then((place) => place.deleteOne())
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })


module.exports = { 
  getDadosFinanca,
  postDadosFinanca,
  patchDadosFinanca,
  deleteDadosFinanca
}