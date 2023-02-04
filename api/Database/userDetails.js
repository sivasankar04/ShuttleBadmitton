const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({
    city: { type: String, },
    address: { type: String,  },
    country: { type: String,  },
    state: { type: String,  }
});

const UserDetailModal = mongoose.model('userDetailSchema', userDetailSchema);

module.exports = UserDetailModal;
