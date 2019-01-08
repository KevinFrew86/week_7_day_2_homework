const instrumentDataModel = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js');
const FamilySelectView = require('./views/inst_fam_select_view.js');
const FamilyInfoView = require('./views/inst_fam_details_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(instrumentDataModel);

  const selectElement = document.querySelector('#instrument-families');
  const selectView = new FamilyInfoView(selectElement);
  selectView.bindEvents();

  const instrumentfamilies = new InstrumentFamilies();
  instrumentfamilies.bindEvents();


});
