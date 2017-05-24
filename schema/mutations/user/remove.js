import {
    GraphQLNonNull, GraphQLID, GraphQLBoolean
} from 'graphql';

import {
    UserRightModel,
    UserGroupModel,
    UserProfileModel,
    UserAccountModel,
    UserModel
} from '../../../models/user';
import getProjection from '../../get-projection';

const removeUserRight = {
    type: GraphQLBoolean,
    args: {
        _id: {name: '_id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const model = await UserRightModel
                        .findByIdAndRemove(params._id, {select: projection})
                        .exec();
        if (!model) {
            throw new Error('Error removing user right');
        }
        return model;
    }
};

const removeUserGroup = {
    type: GraphQLBoolean,
    args: {
        _id: {name: '_id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const model = await UserGroupModel
                        .findByIdAndRemove(params._id, {select: projection})
                        .exec();
        if (!model) {
            throw new Error('Error removing user group');
        }
        return model;
    }
};

const removeUserProfile = {
    type: GraphQLBoolean,
    args: {
        _id: {name: '_id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const model = await UserProfileModel
                        .findByIdAndRemove(params._id, {select: projection})
                        .exec();
        if (!model) {
            throw new Error('Error removing user profile');
        }
        return model;
    }
};

const removeUserAccount = {
    type: GraphQLBoolean,
    args: {
        _id: {name: '_id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const model = await UserAccountModel
                        .findByIdAndRemove(params._id, {select: projection})
                        .exec();
        if (!model) {
            throw new Error('Error removing user account');
        }
        return model;
    }
};

const removeUser = {
    type: GraphQLBoolean,
    args: {
        _id: {name: '_id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const model = await UserModel
                        .findByIdAndRemove(params._id, {select: projection})
                        .exec();
        if (!model) {
            throw new Error('Error removing user right');
        }
        return model;
    }
};

export default {
    removeUserRight,
    removeUserGroup,
    removeUserProfile,
    removeUserAccount,
    removeUser
}
