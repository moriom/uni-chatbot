'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Feedback Schema
 */

const FeedbackSchema = new Schema({
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    message: { type: String, default: '', trim: true, maxlength: 5000 },
    createdAt: { type: Date, default: Date.now }
});

/**
 * Validations
 */

// FeedbackSchema.path('message').required(true, 'Feedback body cannot be blank');


/**
 * Methods
 */

FeedbackSchema.methods = {
};

/**
 * Statics
 */

FeedbackSchema.statics = {
    /**
     * List feedbacks
     *
     * @param {Object} options
     * @api private
     */

    list: function(options) {
        const criteria = options.criteria || {};
        const page = options.page || 0;
        const limit = options.limit || 30;
        return this.find(criteria)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
};

mongoose.model('Feedback', FeedbackSchema);
