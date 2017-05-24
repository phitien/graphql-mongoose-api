import {
    GraphQLNonNull, GraphQLBoolean
} from 'graphql';

import {
    UserRightInputType,
    UserGroupInputType,
    UserProfileInputType,
    UserAccountInputType,
    UserInputType
} from '../../types/user-input';

import {
    UserRightModel,
    UserGroupModel,
    UserProfileModel,
    UserAccountModel,
    UserModel
} from '../../../models/user';

const addUserRight = {
    type: GraphQLBoolean,
    args: {
        data: {name: 'data', type: new GraphQLNonNull(UserRightInputType)}
    },
    async resolve (root, params, options) {
        const model = new UserRightModel(params.data);
        const instance = await model.save();
        if (!instance) {
            throw new Error('Error adding new user right');
        }
        return true;
    }
};

const addUserGroup = {
    type: GraphQLBoolean,
    args: {
        data: {name: 'data', type: new GraphQLNonNull(UserGroupInputType)}
    },
    async resolve (root, params, options) {
        const model = new UserGroupModel(params.data);
        const instance = await model.save();
        if (!instance) {
            throw new Error('Error adding new user group');
        }
        return true;
    }
};

const addUserProfile = {
    type: GraphQLBoolean,
    args: {
        data: {name: 'data', type: new GraphQLNonNull(UserProfileInputType)}
    },
    async resolve (root, params, options) {
        const model = new UserProfileModel(params.data);
        const instance = await model.save();
        if (!instance) {
            throw new Error('Error adding new user profile');
        }
        return true;
    }
};

const addUserAccount = {
    type: GraphQLBoolean,
    args: {
        data: {name: 'data', type: new GraphQLNonNull(UserAccountInputType)}
    },
    async resolve (root, params, options) {
        const model = new UserAccountModel(params.data);
        const instance = await model.save();
        if (!instance) {
            throw new Error('Error adding new user account');
        }
        return true;
    }
};

const addUser = {
    type: GraphQLBoolean,
    args: {
        data: {name: 'data', type: new GraphQLNonNull(UserInputType)}
    },
    async resolve (root, params, options) {
        const model = new UserModel(params.data);
        const instance = await model.save();
        if (!instance) {
            throw new Error('Error adding new user');
        }
        return true;
    }
};

export default {
    addUserRight,
    addUserGroup,
    addUserProfile,
    addUserAccount,
    addUser
}
