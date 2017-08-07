'use strict';

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    data: {type: String},
    created: {type: Date, default: Date.now}
})

postSchema.methods.apiRepr = function() {
    return {
        id: this.id,
        data: this.data,
        created: this.created
    }
}

const Post = mongoose.model('Post', postSchema);

module.exports = {Post};