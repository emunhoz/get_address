describe('Home page', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000/')
  })

  it('search address by zip code', function () {
    cy.get('input[name="cep"]').type('02047-000')
    cy.get('button')
      .contains('Buscar')
      .click()
    cy.get('p').contains('Rua Maria Prestes Maia')
    cy.get('p').contains('Vila Guilherme')
    cy.get('p').contains('São Paulo - SP')
    cy.get('p').contains('02047-000')
  })

  it('check address', function () {
    cy.get('p').contains('Rua Maria Prestes Maia')
  })

  it('check neighborhood', function () {
    cy.get('p').contains('Vila Guilherme')
  })

  it('check city and state', function () {
    cy.get('p').contains('São Paulo - SP')
  })

  it('check zip code', function () {
    cy.get('p').contains('02047-000')
  })
})
