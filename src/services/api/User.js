const dummyUser = {
  id: +new Date(),
  name: 'Dummy User',
};

const User = {
  async getUser() {
    return dummyUser;
  },
};

export default User;
