const PubSub = require('../helpers/pubsub.js')

const FamilyInfoView = function(element){
  this.element = element;
};

FamilyInfoView.prototype.bindEvents = function(){

  PubSub.subscribe('Famlies:family-found', (event) => {
    console.log('Family passed to view:', event.detail);
    this.render(event.detail);
  });
}

FamilyInfoView.prototype.render = function(family) {
  const familyDiv = document.querySelector('#family-info');
  const infoPara = document.createElement('p');
  infoPara.textContent = `${family.description}`

  familyDiv.innerHTML = '';
  familyDiv.appendChild(infoPara);
};

module.exports = FamilyInfoView;
