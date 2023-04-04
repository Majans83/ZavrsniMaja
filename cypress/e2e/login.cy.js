/// <reference types = "Cypress" />

const credentials = require('../fixtures/data.json');
const { loginPage } = require('../page_objects/LoginPOM');

describe('Login', () => {

    it('Successfull login', () => {
        cy.visit('/login');
        loginPage.emailInputField.type(credentials.userEmail);
        loginPage.passwordField.type(credentials.password);
        loginPage.loginBtn.click();

        cy.url().should('contains', '/my-organizations');
        cy.get(('button[type="submit"]')).should('not.exist');
        cy.get('span[class="vs-c-user-name"]').should('be.visible');

    })

    it('Negativ case - Bad password', () => {
        cy.visit('/login');
        loginPage.emailInputField.type(credentials.userEmail);
        loginPage.passwordField.type(credentials.badpassword);
        loginPage.loginBtn.click();

        cy.url().should('contains', '/login');
        cy.get(('button[type="submit"]')).should('be.visible');
        cy.get('span[class="vs-c-user-name"]').should('not.exist');
        cy.get('span[class="el-form-item__error"]').should('be.visible');

    })

    it('Negativ case - Bad email', () => {
        cy.visit('/login');
        loginPage.emailInputField.type(credentials.bademail);
        loginPage.passwordField.type(credentials.password);
        loginPage.loginBtn.click();

        cy.url().should('contains', '/login');
        cy.get(('button[type="submit"]')).should('be.visible');
        cy.get('span[class="vs-c-user-name"]').should('not.exist');
        cy.get('span[class="el-form-item__error"]').should('be.visible');
    })

    
})