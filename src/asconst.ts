//type UserRoles = 'admin' | 'editor' | 'subscriber';
// enum UserRoles {
//     Admin = 'admin',
//     Editor = 'editor',
//     Subscriber = 'subscriber'
// }

const UserRoles = {
    Admin: 'admin',
    Editor: 'editor',
    Subscriber: 'subscriber'
} as const;

//UserRoles.Admin = 'Monitor'; 


const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
}
const idEditPermissions = canEdit(UserRoles.Admin); // true
console.log(idEditPermissions);