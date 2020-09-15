let account = {
    name: "Vin",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },

    getAccountSummary: function (){
        let totalExpenses = 0;
        this.expenses.forEach(function(el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};

account.addExpenses('Bayar Tagihan Listrik', 250000);
account.addExpenses('Beli Twister', 18000);
account.addExpenses('Beli Wafer Selamat', 23000)
console.log("Total pengeluaran " + account.name +" adalah Rp." + account.getAccountSummary());