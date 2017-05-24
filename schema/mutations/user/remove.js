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
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        const model = await UserRightModel
                        .findByIdAndRemove(args.id, {select: projection})
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
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        const model = await UserGroupModel
                        .findByIdAndRemove(args.id, {select: projection})
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
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        const model = await UserProfileModel
                        .findByIdAndRemove(args.id, {select: projection})
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
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        const model = await UserAccountModel
                        .findByIdAndRemove(args.id, {select: projection})
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
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        const model = await UserModel
                        .findByIdAndRemove(args.id, {select: projection})
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
