const UserListHelper = {
  format(rawData, { search, sortedBy }) {
    const result = rawData
      .filter((customer) => (
        customer.name.toLowerCase().includes(search.toLowerCase()) || customer.username.toLowerCase().includes(search.toLowerCase())
      ))
      .sort((a,b) => {
        if (sortedBy === 'default') return 0;
  
        if (a[sortedBy].toLowerCase() < b[sortedBy].toLowerCase()) {
          return -1;
        }
        if (a[sortedBy].toLowerCase() > b[sortedBy].toLowerCase()) {
          return 1;
        }
  
        return 0;
      });
    
    return result;
  },
};

export default UserListHelper;
