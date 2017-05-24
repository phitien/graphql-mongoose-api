import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import {
    UserRightType,
    UserGroupType,
    UserProfileType,
    UserAccountType,
    UserType
} from '../types/user';

import {
    UserRightModel,
    UserGroupModel,
    UserProfileModel,
    UserAccountModel,
    UserModel
} from '../../models/user';

import getProjection from '../get-projection';

const rights = {
    type: new GraphQLList(UserRightType),
    args: {},
    resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        return UserRightModel
                .find()
                .select(projection)
                .exec();
    }
}

const users = {
    type: new GraphQLList(UserType),
    args: {},
    resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        return UserModel
                .find()
                .select(projection)
                .exec();
    }
}

const user = {
    type: UserType,
    args: {
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        return UserModel
                .find(args.id)
                .select(projection)
                .exec();
    }
}

const groups = {
    type: new GraphQLList(UserGroupType),
    args: {},
    resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        return UserGroupModel
                .find()
                .select(projection)
                .exec();
    }
}

const group = {
    type: UserGroupType,
    args: {
        id: {name: 'id', type: new GraphQLNonNull(GraphQLID)}
    },
    resolve (root, args, context, options) {
        const projection = getProjection(options.fieldNodes[0]);
        return UserGroupModel
                .find(args.id)
                .select(projection)
                .exec();
    }
}

export default {
    rights,
    user, users,
    group, groups
}
