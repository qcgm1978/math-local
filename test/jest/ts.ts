// Note: I'm just highlighting the main parts, this won't compile 😋
class CorruptedOrder extends Order {
  public placeOrder() {
    this._fixCorruptedItems();
    super.placeOrder();
  }
}

class OrderOnFraudulentAccount extends Order {
  public placeOrder() {
    this._notifyFraudDepartment();
  }
}

class IncompleteOrder extends Order {
  public placeOrder() {
    // Do nothing...
  }
}
class OrderFactory {
  public static makeOrder(accountId: number, items: any[]): Order {
    if (this._fraudWasDetected(accountId)) {
      return new OrderOnFraudulentAccount();
    } else if (items === null || items.length === 0) {
      return new EmptyOrder();
    }
    // and so on....
  }
}
module.exports = { OrderFactory };
