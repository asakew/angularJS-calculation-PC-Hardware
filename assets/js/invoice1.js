(function(angular) {
  'use strict';
angular.module('invoice1', [])
  .controller('InvoiceController', function InvoiceController() {
    this.qty = 1;
    this.cost = 1;
    this.inCurr = 'UZS';
    this.currencies = ['UZS', 'USD', 'RUB'];
    this.usdToForeignRates = {
      UZS: 100,
      USD: 148,
      RUB: 10689
    };

    this.total = function total(outCurr) {
      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
      window.alert('Thanks!');
    };
  });
})(window.angular);

/*
Copyright 2021 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/