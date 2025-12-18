/**
 * Customer entity for the CRM system
 * @property {string} id - Unique identifier
 * @property {string} name - Customer's full name
 * @property {string} email - Primary email address
 * @property {string} tier - Membership tier: 'bronze', 'silver', 'gold', 'platinum'
 * @property {Date} memberSince - Date of first purchase
 */
class Customer {
  constructor(id, name, email, tier, memberSince) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.tier = tier;
    this.memberSince = memberSince;
  }

  getYearsAsMember() {
    const now = new Date();
    return Math.floor(
      (now - this.memberSince) / (365.25 * 24 * 60 * 60 * 1000)
    );
  }
}

module.exports = Customer;
