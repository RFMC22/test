/// <reference types="cypress" />

describe('PokeApi test', () =>{
  const url = 'https://pokeapi.co/api/v2/pokemon';
  beforeEach(()=>{
    cy.request(url+"/6").as('charizard');
  });

  it('Escribir en JSON', () => {
    cy.get('@charizard').then((res) =>{
      let arr = new Array();
      arr = res;
      cy.writeFile('cypress/pruebaApi/testdata.txt', arr);
    })
  })
});