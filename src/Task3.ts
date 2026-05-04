type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

const getZipCode = (response: UserResponse) => {
    return response.info?.address?.zipCode ?? "00000";
};
const response1: UserResponse = {
    info: {
        address: {
            zipCode: '12345'
        }
    }
};
const response2: UserResponse = {
    info: {
        address: {}
    }
};
const response3: UserResponse = {};
console.log(getZipCode(response1));
console.log(getZipCode(response2));
console.log(getZipCode(response3)); 