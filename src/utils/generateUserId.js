const generateUserId = (length = 11) => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    
    for (let i = 0; i < length; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return userId;

};

export default generateUserId;