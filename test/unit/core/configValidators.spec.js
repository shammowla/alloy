/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import configValidators from "../../../src/core/configValidators";
import createConfig from "../../../src/core/createConfig";

describe("configValidators", () => {
  const validConfigurations = [
    { propertyID: "" },
    { propertyID: "myproperty1" },
    {
      propertyID: "myproperty1",
      edgeDomain: "stats.firstparty.com"
    },
    { propertyID: "myproperty1", edgeDomain: "STATS.FIRSTPARY.COM" }
  ];

  const invalidConfigurations = [
    {},
    { propertyID: "myproperty1", edgeDomain: "" },
    { propertyID: "myproperty1", edgeDomain: "stats firstparty.com" }
  ];

  validConfigurations.forEach((config, i) => {
    it(`validates configuration (${i})`, () => {
      const configObj = createConfig(config);
      configObj.addValidators(configValidators);
      configObj.validate();
    });
  });

  invalidConfigurations.forEach((config, i) => {
    it(`invalidates configuration (${i})`, () => {
      const configObj = createConfig(config);
      configObj.addValidators(configValidators);
      expect(() => configObj.validate()).toThrowError();
    });
  });
});
