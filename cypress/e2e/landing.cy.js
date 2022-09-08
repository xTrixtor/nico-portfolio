describe('Visit Website', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');
    cy.get("div#landing").should("be.visible");
  })
})

describe('Test Landing Text', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');
    cy.get("div#landing").should("have.class","h-[100vh]")
    cy.get("div").contains("Germany").parent().parent().parent().should("contain","Hi! I am Nico.");
  })
})

describe('Test Landing Picture', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    cy.get("div#landing").get("img").should('have.attr', 'src').should('contain','Me.jpg');
    cy.get("div#landing").get("img").should("have.css","border-radius","9999px")
  })
})

describe('Test Blue Ball', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    cy.get("div#landing").get("blur-sm");
  })
})