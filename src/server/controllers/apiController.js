const express = require('express');

const apiController = {};

apiController.getMetrics = (req, res, next) => {
  fetch('http://localhost:3000/api/dashboards/uid/g7ZQiYP4k', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJrIjoiTlQ5QUI0VmgzREUzd0ZhTjdicWFqanA0aWNPS3dWNWciLCJuIjoia2Fma2FsZXJ0c190ZXN0X2tleSIsImlkIjoxfQ==',
      'Accept-Encoding': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('this is the dashboard data', data);
      console.log(data.dashboard.panels);
      res.locals.data = data;
      return next();
    })
    .catch((err) => next(err));
};
const getURP = () => {};
apiController.getActiveBrokers = (req, res, next) => {
  console.log('getting active brokers');
  fetch(
    'http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activebrokercount'
  )
    .then((response) => response.json())
    .then((data) => {
      res.locals.metrics = {};
      res.locals.metrics.activeBrokers = data.data.result;
      console.log('we have activeBrokers: ', data.status);
      return next();
    })
    .catch((err) => {
      return next({
        err: 'Error in apiController.getURP',
        status: 500,
        message: { err: 'Error fetching Metrics from Prometheus' },
      });
    });
};
apiController.getURP = (req, res, next) => {
  console.log('Getting URP');
  const now = new Date();
  const endTimestamp = Math.floor(now.getTime() / 1000);
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const startTimestamp = Math.floor(sevenDaysAgo.getTime() / 1000);
  const step = 86400 / 24;
  const queryURL = `http://localhost:9090/api/v1/query_range?query=kafka_server_replicamanager_underreplicatedpartitions&start=${startTimestamp}&end=${endTimestamp}&step=${step}s`;
  const oldQuery =
    'http://localhost:9090/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions';
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      //res.locals.metrics = {};
      res.locals.metrics.urp = data.data.result;
      console.log('we have URP: ', data.data.result.values);
      return next();
    })
    .catch((err) => {
      return next({
        err: 'Error in apiController.getURP',
        status: 500,
        message: { err: 'Error fetching Metrics from Prometheus' },
      });
    });
};

apiController.getBytesIn = (req, res, next) => {
  console.log('getting Bytes In');
  //fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokertopicmetrics_bytesin_total')
  fetch(
    'http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesin_total&start=2023-04-27T15:42:30.781Z&end=2023-04-27T15:45:00.781Z&step=15s'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('data has been parsed ', data);
      res.locals.metrics.bytesIn = data.data.result;
      console.log('we have Bytes In: ', data.data.result);
      return next();
    })
    .catch((err) => {
      return next({
        err: 'Error in apiController.getBytesIn',
        status: 500,
        message: { err: 'Error fetching Metrics from Prometheus' },
      });
    });
};

apiController.getBytesOut = (req, res, next) => {
  console.log('getting Bytes Out');
  fetch(
    'http://localhost:9090/api/v1/query_range?query=kafka_server_brokertopicmetrics_bytesout_total&start=2023-04-27T15:42:30.781Z&end=2023-04-27T15:45:00.781Z&step=15s'
  )
    .then((response) => response.json())
    .then((data) => {
      res.locals.metrics.bytesOut = data.data.result;
      console.log('we have Bytes Out: ', data.data.result);
      return next();
    })
    .catch((err) => {
      return next({
        err: 'Error in apiController.getBytesOut',
        status: 500,
        message: { err: 'Error fetching Metrics from Prometheus' },
      });
    });
};

module.exports = apiController;
