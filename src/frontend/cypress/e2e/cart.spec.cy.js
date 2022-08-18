describe('Cart Journey', () => {
    it('can add an item to the cart', () => {
        cy.visit('http://localhost:8080/')
        cy.get('header h1 a').should('contain', 'PlantStore')
        cy.get('#cart-amount').should('not.exist')
        cy.get('button').first().click()
        cy.get('#cart-amount').should('contain', '(1)')
        cy.get('header article section h1 a').click()
        cy.get('h2').should('contain', 'Your Cart')
        cy.get('ol li').first().should('contain', 'Boston Fern £13.95')
    })

    it('can remove an item to the cart', () => {
        cy.visit('http://localhost:8080/')
        cy.get('button').first().click()
        cy.get('header article section h1 a').click()
        cy.get('ol li').first().should('contain', 'Boston Fern £13.95')
        cy.get('.remove-item').first().click()
        cy.get('ol li').should('not.exist')
    })
})