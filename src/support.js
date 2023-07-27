const expenses = [
  {
    id: 1,
    date: "2023-7-11",
    expenseHead: "Blazer",
    price: "6000",
  },
  {
    id: 2,
    date: "2023-8-23",
    expenseHead: "Key Board",
    price: "1500",
  },
];

export function getExpenses() {
  return expenses;
}

export function updateExpense(date, expenseHead, price) {
  const expense= {
    id: expenses.length+1,
    date,
    expenseHead,
    price
  }
  expenses.unshift(expense)

  console.log('updated expenses', expenses)
}
