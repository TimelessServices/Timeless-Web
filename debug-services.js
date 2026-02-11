const { services } = require('./src/content/services.js');
console.log('Keys:', Object.keys(services));
console.log('Includes maintenance-plans:', Object.keys(services).includes('maintenance-plans'));
