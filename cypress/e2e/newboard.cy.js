/// <reference types = "Cypress" />

const credentials = require('../fixtures/data.json');
const { loginPage } = require('../page_objects/LoginPOM');

describe('Add new board', () => {

    it.only('Successful add new board', () => {
        cy.visit('/login');
        loginPage.login('maja.turanski+2023@gmail.com', 'thermaltake2023');
        cy.wait(2000);
        cy.visit('/organizations/28305/boards');
        loginPage.xButton.click();
        loginPage.addNewBoard.click();
        loginPage.boardName.type('My board');
        loginPage.nextBtn.click();
        loginPage.scrumBoard.check({force:true});
        loginPage.nextBtn.click();
        loginPage.nextBtn.click();
        loginPage.finishBtn.click();

    })
})