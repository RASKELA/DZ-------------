export class GaragePage {
  visit() {
    cy.visit('/panel/garage');
  }

  addCar(carBrand = 'Audi', carModel = 'A3') {
    cy.contains('Add car').click();
    cy.get('select[name=brand]').select(carBrand);
    cy.get('select[name=model]').select(carModel);
    cy.get('button[type=submit]').click();
  }
}
