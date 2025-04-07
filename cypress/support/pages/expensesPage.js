export class ExpensesPage {
    addFuelExpense(mileage = 100, litres = 20, price = 500) {
        cy.contains('Expenses').click();
        cy.contains('Add expense').click();
        cy.get('input[formcontrolname=mileage]').type(mileage);
        cy.get('input[formcontrolname=litres]').type(litres);
        cy.get('input[formcontrolname=totalCost]').type(price);
        cy.get('button[type=submit]').click();
    }
}
