import {
    GraphQLInputObjectType,
    GraphQLNonNull, GraphQLList,
    GraphQLString, GraphQLBoolean,
    GraphQLID
} from 'graphql';

const UserRightInputType = new GraphQLInputObjectType({
    name: 'UserRightInputType',
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
    }
});

const UserProfileInputType = new GraphQLInputObjectType({
    name: 'UserProfileInputType',
    fields: {
        birthDate: {type: GraphQLString},
        occupation: {type: GraphQLString},
        departament: {type: GraphQLString},
    }
});

const UserAccountInputType = new GraphQLInputObjectType({
    name: 'UserAccountInputType',
    fields: {
        kind:  {type: new GraphQLNonNull(GraphQLString)},
    }
});

const UserGroupInputType = new GraphQLInputObjectType({
    name: 'UserGroupInputType',
    fields: {
        active: {type: GraphQLBoolean},
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        rights: {type: new GraphQLList(UserRightInputType)},
    }
});

const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    fields: {
        active: {type: GraphQLBoolean},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        lastLogin: {type: GraphQLString},
        profile: {type: UserProfileInputType},
        accounts: {type: new GraphQLList(UserAccountInputType)},
        groups: {type: new GraphQLList(UserGroupInputType)},
        rights: {type: new GraphQLList(UserRightInputType)},
    }
});

export {
    UserRightInputType,
    UserGroupInputType,
    UserProfileInputType,
    UserAccountInputType,
    UserInputType
};
