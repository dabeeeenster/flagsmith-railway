const Actions = Object.assign({}, require('./base/_action-constants'), {
    'ACCEPT_INVITE': 'ACCEPT_INVITE',
    'CHANGE_USER_FLAG': 'CHANGE_USER_FLAG',
    'CREATE_ENV': 'CREATE_ENV',
    'CREATE_FLAG': 'CREATE_FLAG',
    'CREATE_ORGANISATION': 'CREATE_ORGANISATION',
    'CREATE_PROJECT': 'CREATE_PROJECT',
    'CREATE_SEGMENT': 'CREATE_SEGMENT',
    'DELETE_ENVIRONMENT': 'DELETE_ENVIRONMENT',
    'DELETE_FLAG': 'DELETE_FLAG',
    'DELETE_IDENTITY': 'DELETE_IDENTITY',
    'DELETE_IDENTITY_TRAIT': 'DELETE_IDENTITY_TRAIT',
    'DELETE_INVITE': 'DELETE_INVITE',
    'DELETE_USER': 'DELETE_USER',
    'DELETE_ORGANISATION': 'DELETE_ORGANISATION',
    'GET_TAGS': 'GET_TAGS',
    'UPDATE_TAG': 'UPDATE_TAG',
    'CREATE_TAG': 'CREATE_TAG',
    'DELETE_TAG': 'DELETE_TAG',
    'CREATE_GROUP': 'CREATE_GROUP',
    'GET_GROUPS': 'GET_GROUPS',
    'GET_GROUPS_PAGE': 'GET_GROUPS_PAGE',
    'DELETE_GROUP': 'DELETE_GROUP',
    'UPDATE_GROUP': 'UPDATE_GROUP',
    'GET_PERMISSIONS': 'GET_PERMISSIONS',
    'GET_AVAILABLE_PERMISSIONS': 'GET_AVAILABLE_PERMISSIONS',
    'DELETE_PROJECT': 'DELETE_PROJECT',
    'DELETE_SEGMENT': 'DELETE_SEGMENT',
    'EDIT_ENVIRONMENT': 'EDIT_ENVIRONMENT',
    'EDIT_ENVIRONMENT_FLAG': 'EDIT_ENVIRONMENT_FLAG',
    'EDIT_FLAG': 'EDIT_FLAG',
    'EDIT_ORGANISATION': 'EDIT_ORGANISATION',
    'EDIT_PROJECT': 'EDIT_PROJECT',
    'EDIT_SEGMENT': 'EDIT_SEGMENT',
    'EDIT_TRAIT': 'EDIT_TRAIT',
    'EDIT_USER_FLAG': 'EDIT_USER_FLAG',
    'GET_AUDIT_LOG': 'GET_AUDIT_LOG',
    'GET_AUDIT_LOG_PAGE': 'GET_AUDIT_LOG_PAGE',
    'GET_ENVIRONMENT': 'GET_ENVIRONMENT',
    'GET_ENVIRONMENTS': 'GET_ENVIRONMENTS',
    'GET_FLAGS': 'GET_FLAGS',
    'CHANGE_FLAG': 'CHANGE_FLAG',
    'GET_IDENTITIES': 'GET_IDENTITIES',
    'GET_IDENTITIES_PAGE': 'GET_IDENTITIES_PAGE',
    'GET_IDENTITY': 'GET_IDENTITY',
    'GET_IDENTITY_SEGMENTS': 'GET_IDENTITY_SEGMENTS',
    'GET_ORGANISATION': 'GET_ORGANISATION',
    'OAUTH': 'OAUTH',
    'GET_PROJECT': 'GET_PROJECT',
    'GET_SEGMENTS': 'GET_SEGMENTS',
    'INVITE_USERS': 'INVITE_USERS',
    'REMOVE_FLAG': 'REMOVE_FLAG',
    'REMOVE_SEGMENT': 'REMOVE_SEGMENT',
    'REMOVE_USER_FLAG': 'REMOVE_USER_FLAG',
    'RESEND_INVITE': 'RESEND_INVITE',
    'SEARCH_AUDIT_LOG': 'SEARCH_AUDIT_LOG',
    'SEARCH_IDENTITIES': 'SEARCH_IDENTITIES',
    'SELECT_ENVIRONMENT': 'SELECT_ENVIRONMENT',
    'SAVE_IDENTITY': 'SAVE_IDENTITY',
    'SELECT_ORGANISATION': 'SELECT_ORGANISATION',
    'ENABLE_TWO_FACTOR': 'ENABLE_TWO_FACTOR',
    'DISABLE_TWO_FACTOR': 'DISABLE_TWO_FACTOR',
    'CONFIRM_TWO_FACTOR': 'CONFIRM_TWO_FACTOR',
    'TWO_FACTOR_LOGIN': 'TWO_FACTOR_LOGIN',
    'SET_USER_FLAG': 'SET_USER_FLAG',
    'TOGGLE_FLAG': 'TOGGLE_FLAG',
    'TOGGLE_USER_FLAG': 'TOGGLE_USER_FLAG',
    'UPDATE_USER_ROLE': 'UPDATE_USER_ROLE',
    'UPDATE_SUBSCRIPTION': 'UPDATE_SUBSCRIPTION',
    'GET_INFLUX_DATA': 'GET_INFLUX_DATA',
    'GET_FLAG_INFLUX_DATA': 'GET_FLAG_INFLUX_DATA',
});

window.Actions = Actions;
module.exports = Actions;