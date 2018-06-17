const express = require('express');
const bodyParser = require('body-parser');

const Title = require('../models/Title');

const router = express.Router();

router.get('/', (req, res, next) => {
  Title.find({}, 'TitleId TitleName TitleNameSortable ReleaseYear', { sort: 'TitleNameSortable' }, (err, titles) => {
    if (err) { return res.send(err); }
    return res.json(titles);
  });
});

router.get('/:searchName', (req, res, next) => {
  const escapedSearchName = req.params.searchName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const searchModel = { TitleName: new RegExp(escapedSearchName, 'i') };
  Title.find(searchModel, 'TitleId TitleName TitleNameSortable ReleaseYear', { sort: 'TitleNameSortable' }, (err, titles) => {
    if (err) { return res.send(err); }
    return res.json(titles);
  });
});

router.get('/detail/:detailId(\\d+)', (req, res, next) => {
  Title.findOne({ TitleId: req.params.detailId }, (err, titleDetail) => {
    if (err) { return res.send(err); }
    return res.json(titleDetail);
  });
});

module.exports = router;
