'use strict';

/**
 * mrember service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mrember.mrember');
