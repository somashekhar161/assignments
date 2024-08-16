/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const TotalSpentByCategory = [];
  transactions.forEach((Transaction) => {
    // find index
    const Index = TotalSpentByCategory.findIndex(
      (v) => v.category === Transaction.category
    );
    if (Index === -1) {
      // if not in Total spent category add it
      TotalSpentByCategory.push({
        category: Transaction.category,
        totalSpent: Transaction.price,
      });
    } else {
      // if in Total spent category update the total spent
      TotalSpentByCategory[Index].totalSpent += Transaction.price;
    }
  });
  return TotalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
