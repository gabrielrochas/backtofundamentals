import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Ailta app',
          type: 'deposit',
          category: 'Job',
          amount: 3000,
          createdAt: new Date('2022-02-02 09:00:00'),
        },
        {
          id: 2,
          title: 'Ailta app - new sale',
          type: 'deposit',
          category: 'Job',
          amount: 4000,
          createdAt: new Date('2022-01-31 10:00:00'),
        },
        {
          id: 3,
          title: 'Rent',
          type: 'withdraw',
          category: 'Home',
          amount: 1000,
          createdAt: new Date('2022-01-28 10:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [this.schema.all('transaction')];
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
