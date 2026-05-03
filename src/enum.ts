//type UserRoles = 'admin' | 'editor' | 'subscriber';
enum UserRoles {
    Admin = 'admin',
    Editor = 'editor',
    Subscriber = 'subscriber'
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
}
const idEditPermissions = canEdit(UserRoles.Admin); // true
console.log(idEditPermissions);