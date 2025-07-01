import { getApplication } from '../../scripts/pim.js';

export default function decorate(block) {
  var applicationID = block.querySelector('p');
  block.querySelector('p').innerHTML = "Application: " + applicationID;  
}