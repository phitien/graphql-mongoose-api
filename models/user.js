import mongoose from 'mongoose';

const UserRightModel = mongoose.model('UserRightModel', new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true, index: true},
    description: mongoose.Schema.Types.String,
}));

const UserProfileModel = mongoose.model('UserProfileModel', new mongoose.Schema({
    birthDate: {type: mongoose.Schema.Types.Date, default: mongoose.Schema.Types.Date.now},
    occupation: mongoose.Schema.Types.String,
    departament: mongoose.Schema.Types.String
}));

const UserAccountModel = mongoose.model('UserAccountModel', new mongoose.Schema({
    kind: {type: mongoose.Schema.Types.String, required: true}
}));

const UserGroupModel = mongoose.model('UserGroupModel', new mongoose.Schema({
    active: mongoose.Schema.Types.Boolean,
    name: {type: mongoose.Schema.Types.String, required: true, unique: true, index: true},
    description: mongoose.Schema.Types.String,
    rights: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserRightModel'}]
}));

const UserModel = mongoose.model('UserModel', new mongoose.Schema({
    active: mongoose.Schema.Types.Boolean,
    firstName: mongoose.Schema.Types.String,
    lastName: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    lastLogin: {type: mongoose.Schema.Types.Date, default: mongoose.Schema.Types.Date.now},
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'UserProfileModel'},
    accounts: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserAccountModel'}],
    groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserGroupModel'}],
    rights: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserRightModel'}],
}));

export {
    UserRightModel,
    UserGroupModel,
    UserProfileModel,
    UserAccountModel,
    UserModel
};
