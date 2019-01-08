const PubSub = require('../helpers/pubsub.js');

const InstrumentFamilies = function(instrumentDataModel) {
  this.instrumentDataModel = instrumentDataModel;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-families-ready', this.families)
  console.log('Published on all-families-ready', this.famalies);

  PubSub.subscribe('FamilyMenuView:family-selected', (event) => {
    const index = event.detail;
    console.log('Index passed to families', index);
    const foundFamily = this.findFamily(index);
    PubSub.publish('Famlies:family-found', foundFamily);
  });
}

InstrumentFamilies.prototype.findFamily = function(index){
  return this.families[index];
}

module.exports = InstrumentFamilies;
