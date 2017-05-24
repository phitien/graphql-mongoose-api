import {
    GraphQLObjectType,
    GraphQLNonNull, GraphQLList,
    GraphQLString, GraphQLBoolean,
    GraphQLID
} from 'graphql';

const UserRightType = new GraphQLObjectType({
    name: 'UserRightType',
    fields: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
    }
});

const UserProfileType = new GraphQLObjectType({
    name: 'UserProfileType',
    fields: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        birthDate: {type: GraphQLString},
        occupation: {type: GraphQLString},
        departament: {type: GraphQLString},
    }
});

const UserAccountType = new GraphQLObjectType({
    name: 'UserAccountType',
    fields: {
        kind:  {type: new GraphQLNonNull(GraphQLString)},
    }
});

const UserGroupType = new GraphQLObjectType({
    name: 'UserGroupType',
    fields: {
        active: {type: GraphQLBoolean},
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        rights: {type: new GraphQLList(UserRightType)},
    }
});

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        active: {type: GraphQLBoolean},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        lastLogin: {type: GraphQLString},
        profile: {type: UserProfileType},
        accounts: {type: new GraphQLList(UserAccountType)},
        groups: {type: new GraphQLList(UserGroupType)},
        rights: {type: new GraphQLList(UserRightType)},
    }
});

export {
    UserRightType,
    UserGroupType,
    UserProfileType,
    UserAccountType,
    UserType
};
