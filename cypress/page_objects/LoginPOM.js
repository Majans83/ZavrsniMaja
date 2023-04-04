class LoginPage {

    get emailInputField() {
        return cy.get('input[type="email"]');
     }
 get passwordField() {
        return cy.get('input[type="password"]');
    }

    get loginBtn() {
        return  cy.get('button[type="submit"]');
 
}

get username() {
    return cy.get('span[class="vs-c-user-name"]');
}

get alertMsg() {
    return cy.get('span[class="el-form-item__error"]');
}

get addNewBoard() {
    return cy.get('.vs-c-organization-boards__item--add-new');
}

get xButton() {
    return cy.get('.vs-c-modal__body > .el-button > .el-icon-close');
}

get boardName() {
    return cy.get('input[name="name"]');
}

get nextBtn() {
    return cy.get('button[name="next_btn"]');
}

get scrumBoard() {
    return cy.get('input[value="scrum_board"]');
}

get finishBtn() {
    return cy.get('[name="next_btn"]');
}
login(email, pass) {
    loginPage.emailInputField.type('maja.turanski+2023@gmail.com');
    loginPage.passwordField.type('thermaltake2023');
    loginPage.loginBtn.click();
}
}

export const loginPage = new LoginPage()