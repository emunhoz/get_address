describe('Home page', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000/')
  })

  it('search address by zip code', function () {
    cy.get('input[name="cep"]').type('00000-000')
    cy.get('button')
      .contains('Buscar')
      .click()
  })

  it('check message not found', function () {
    cy.get('[data-test-id="message-not-found"]').contains(
      'Nenhum endereço encontrado!'
    )
  })
})
