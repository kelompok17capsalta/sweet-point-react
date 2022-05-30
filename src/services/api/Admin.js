const dummyAdmin = {
  id: +new Date(),
  name: 'Dummy Admin',
};

const Admin = {
  async getAdmin() {
    return dummyAdmin;
  },
};

export default Admin;
