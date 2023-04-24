const express = require('express');

const apiController = {}

apiController.getMetrics = (req, res, next) => {
  fetch('http://localhost:3000/api/dashboards/uid/g7ZQiYP4k' , {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJrIjoiTlQ5QUI0VmgzREUzd0ZhTjdicWFqanA0aWNPS3dWNWciLCJuIjoia2Fma2FsZXJ0c190ZXN0X2tleSIsImlkIjoxfQ==",
      "Accept-Encoding": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('this is the dashboard data', data)
    console.log(data.dashboard.panels)
    res.locals.data = data;
    return next();
  })
  .catch(err => next(err));
}

apiController.prometheusMetrics = (req, res, next) => {
  console.log('in prometheus metrics')
  fetch('http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions')
  .then(response => response.json())
  .then(data => {
    res.locals.urp = data;
    console.log('we have URP: ', data.status)
    return next();
  })
  .catch (err => {
    return next({
      err: 'Error in apiController.prometheusMetrics',
      status: 500,
      message: { err: 'Error fetching Metrics from Prometheus' },
    });
  })
};
module.exports = apiController;