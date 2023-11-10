const db = require("../database/db");

class Customer {
  constructor(customerData) {
    this.first_name = customerData.first_name;
    this.last_name = customerData.last_name;
    this.age = customerData.age;
    this.monthly_income = customerData.monthly_income;
    this.phone_number = customerData.phone_number;
    this.approved_limit = 0;
  }

  save() {
    const customerData = {
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age,
      monthly_income: this.monthly_income,
      phone_number: this.phone_number,
      approved_limit: this.approved_limit,
    };

    return new Promise((resolve, reject) => {
      const query = "INSERT INTO customers SET ?";
      db.query(query, customerData, (err, results) => {
        if (err) {
          reject(err);
        } else {
          this.customer_id = results.insertId;
          resolve(this);
        }
      });
    });
  }
}

module.exports = Customer;
