describe('Test Nico Böhner Label', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');
    cy.get('a[href*="/"]').first().click()

    cy.url().should('include', 'https://nboehner.vercel.app/')
  })
})

describe('Test NavbarItem About Me', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    const aboutMeButton = cy.get('nav').children(".col").children("ul").children("li").first().contains("a","Über mich");
    aboutMeButton.click();

    cy.url().should('include',"/#aboutMe")
  })
})

describe('Test NavbarItem Projects', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    const aboutMeButton = cy.get('nav').children(".col").children("ul").children("li").contains("a","Projekte");
    aboutMeButton.click();

    cy.url().should('include',"/#projects")
  })
})

describe('Test NavbarItem Contact', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    const aboutMeButton = cy.contains("Kontakt");
    aboutMeButton.click();

    cy.url().should('include',"/#contact")
  })
})

describe('Test Impressum click', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    cy.get("#footer").contains("Impressum").click();
    cy.url().should('include',"/impressum")
    cy.visit('https://nboehner.vercel.app/impressum')
  })
})

describe('Test Datenschutz click', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app');

    cy.get("#footer").contains("Datenschutz").click();
    cy.url().should('include',"/datenschutz")
    cy.visit('https://nboehner.vercel.app/datenschutz')
  })
})