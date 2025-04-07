import { GaragePage } from '../support/pages/garagePage';
import { ExpensesPage } from '../support/pages/expensesPage';

const garage = new GaragePage();
const expenses = new ExpensesPage();

describe('Add car and fuel expenses', () => {
    before(() => {
        cy.visit('/');
        cy.get('input[formcontrolname=email]').type(Cypress.env('email'));
        cy.get('input[formcontrolname=password]').type(Cypress.env('password'));
        cy.get('button[type=submit]').click();
    });

    it('Should add a car and fuel expense', () => {
        garage.visit();
        garage.addCar();
        expenses.addFuelExpense();
    });
});
