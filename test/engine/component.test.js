////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {expect} from 'chai';
import Component from '../../src/engine/component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const ID = '1234';
const STATE = {
  foo: 1,
  bar: 2
};
const NEW_STATE = {
  foo: 4,
  bar: 5
};
const INVALID_STATE = {
  foo: 1,
  bar: 2,
  baz: 3
};

////////////////////////////////////////////////////////////////////////////////
// Test
////////////////////////////////////////////////////////////////////////////////
describe('Component', () => {
  let component;

  describe('#ctor', () => {

    it('throw an error if the id parameter is missing', () => {
      expect(() => new Component()).to.throw();
    });
  });

  describe('#ctor', () => {

    it('throw an error if the state parameter is missing', () => {
      expect(() => new Component(ID)).to.throw();
    });
  });

  describe('#ctor', () => {
    it('should have the id and state passed to the constructor', () => {
      component = new Component(ID, STATE);

      expect(component.id).to.equal(ID);
      expect(component.state.foo).to.equal(STATE.foo);
      expect(component.state.bar).to.equal(STATE.bar);
    });
  });

  describe('#update', () => {
    it('should update the state of the component', () => {
      component.update(NEW_STATE);
      expect(component.state.foo).to.equal(NEW_STATE.foo);
      expect(component.state.bar).to.equal(NEW_STATE.bar);
    });
  });

  describe('#update', () => {
    it('should throw an error for an invalid state', () => {
      expect(() => component.update(INVALID_STATE)).to.throw();
    });
  });


  describe('#createInstance', () => {
    it('create a new component', () => {
      const COMPONENT = Component.createInstance(ID, STATE);

      expect(COMPONENT instanceof Component).to.equal(true);
    });
  });

});
