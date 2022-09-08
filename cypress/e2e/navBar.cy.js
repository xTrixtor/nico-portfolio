describe('Visit Website', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app')
  })
})

describe('Desktop Navbar NotSticky', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app')

    cy.get("nav").should("contain.text", "Nico Böhner");

    cy.get("nav").contains("Über mich");
    cy.get("nav").contains("Projekte");
    cy.get("nav").contains("Kontakt");

    cy.get("nav").get("i").should("have.class","fa-github")
    cy.get("nav").get("i").should("have.class","fa-xing")
    cy.get("nav").get("i").should("have.class","fa-instagram")
  })
})

describe('Desktop Navbar isSticky', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://nboehner.vercel.app')

    cy.scrollTo('0%', '25%')
    cy.get("nav").parent().should("have.class","isSticky")

    cy.get("nav").should("contain.text", "Nico Böhner");

    cy.get("nav").contains("Über mich");
    cy.get("nav").contains("Projekte");
    cy.get("nav").contains("Kontakt");

    cy.get("nav").get("i").should("have.class","fa-github")
    cy.get("nav").get("i").should("have.class","fa-xing")
    cy.get("nav").get("i").should("have.class","fa-instagram")
  })
})

describe('Mobil Navbar', () => {
  it('passes', () => {
    cy.viewport(375, 638);
    cy.visit('https://nboehner.vercel.app')

    cy.get("nav").should("contain.text", "Nico Böhner");
    cy.get("nav").get("i").should("have.class","fa-solid fa-bars");
  })
})

describe('Mobil Click BurgerMenu', () => {
  it('passes', () => {
    cy.viewport(375, 638);
    cy.visit('https://nboehner.vercel.app')

    cy.get("nav").should("contain.text", "Nico Böhner");
    cy.get("nav").get("i").get(".fa-bars").click();

    cy.get("nav").get("i").should("have.class","fa-xmark")
  })
})

describe('Mobil Open NavBarMenu', () => {
  it('passes', () => {
    cy.viewport(375, 638);
    cy.visit('https://nboehner.vercel.app')

    cy.get("ul").parent().should("be.not.visible");
    cy.get("nav").get("i").get(".fa-bars").click();
    cy.get("ul").parent().should("be.visible");
    cy.get("nav").get("i").get(".fa-xmark")
  })
})

describe('Mobil Close NavBarMenu', () => {
  it('passes', () => {
    cy.viewport(375, 638);
    cy.visit('https://nboehner.vercel.app')

    cy.get("ul").parent().should("be.not.visible");
    cy.get("nav").get("i").get(".fa-bars").click();
    cy.get("ul").parent().should("be.visible");
    cy.get("nav").get("i").get(".fa-xmark").click();
    cy.get("ul").parent().should("be.not.visible");
    cy.get("nav").get("i").get(".fa-bars");
    cy.get("ul").parent().should("be.not.visible");
  })
})

describe('Mobil NavBarMenu Content', () => {
  it('passes', () => {
    cy.viewport(375, 638);
    cy.visit('https://nboehner.vercel.app')

    cy.get("nav").get("i").get(".fa-bars").click();

    cy.get("ul").children().should("contain.text","Über mich");
    cy.get("ul").children().should("contain.text","Projekte");
    cy.get("ul").children().should("contain.text","Kontakt");
  })
})