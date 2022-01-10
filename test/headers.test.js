import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

const component = await fixture(html `<loan-header></loan-header>`);
const button = component.shadowRoot.querySelector('button');

describe('loan-header', () => {
  it('component access', () => {
    expect(component).to.be.accessible; });
 
    it('button action', () => {
     const action = Sinon.spy(component,"localeChanged")
     button.click();
     expect(action.calledOnce).to.be.true; });
     
    
    
});
