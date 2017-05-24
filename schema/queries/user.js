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

const users = {
    type: new GraphQLList(UserType),
    args: {},
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
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
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return UserModel
                .find(params.id)
                .select(projection)
                .exec();
    }
}

const groups = {
    type: new GraphQLList(UserGroupType),
    args: {},
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
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
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return UserGroupModel
                .find(params.id)
                .select(projection)
                .exec();
    }
}

export default {
    user, users,
    group, groups
}
