const DateHelper = {
  formatTransactionDate(rawdate) {
    const date = new Date(rawdate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
  },
};

export default DateHelper;
