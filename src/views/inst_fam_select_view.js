const PubSub = require('../helpers/pubsub.js');

const FamilySelectView = function(element){
  this.element = element;
}

FamilySelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    console.log(event.detail);
    this.populate(event.detil);
  });
  this.element.addEventListener('change', (event) => {
    console.log(event.target.value);
    const selectedFamily = event.target.value;
    PubSub.publish('FamilyMenuView:family-selected', selectedIndex)
  });
};


FamilySelectView.prototype.populate = function(families){
  families.forEach((family, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = family.name;
    this.element.appendChild(option);
  });
}

module.exports = FamilySelectView;
