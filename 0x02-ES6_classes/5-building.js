export default class Building {
  constructor(sqft) {
    if (sqft <= 0 || !Number.isInteger(sqft)) {
      throw new TypeError('Sqft must be a positive integer');
    }
    this._sqft = sqft;
    this.checkOverride();
  }

  get sqft() {
    return this._sqft;
  }

  checkOverride() {
    if (this === Building) {
      throw new TypeError('Abstract class "Building" cannot be instantiated directly.');
    }
    if (!Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this), 'evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage method must be implemented');
  }
}
