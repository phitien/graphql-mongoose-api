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
    async resolve (root, args, context, options) {
        const model = new UserRightModel(args.data);
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
    async resolve (root, args, context, options) {
        const model = new UserGroupModel(args.data);
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
    async resolve (root, args, context, options) {
        const model = new UserProfileModel(args.data);
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
    async resolve (root, args, context, options) {
        const model = new UserAccountModel(args.data);
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
    async resolve (root, args, context, options) {
        const model = new UserModel(args.data);
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
