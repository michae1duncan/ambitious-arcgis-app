import Ember from 'ember';
import Map from 'esri/map';

export default Ember.Service.extend({
  // create a new map object at an element
  newMap(element, options) {
    // hold on to the reference for later operations
    this._map = new Map(element, options);
  },

  // destroy the map if it was already created
  destroyMap() {
    if (this._map) {
      this._map.destroy();
      delete this._map;
    }
  }
});
