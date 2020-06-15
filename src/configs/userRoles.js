const UserRoles = {
    superAdmin: 'superAdmin',
    admin: 'admin',
    nonAdmin: 'nonAdmin'
}

export const  userRoles = {
    admins: [String(UserRoles.admin), String(UserRoles.superAdmin)],
    users: [String(UserRoles.nonAdmin)],
    all: [String(UserRoles.superAdmin), String(UserRoles.admin), String(UserRoles.nonAdmin)]
}