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

import { showElements } from "../flicker";

export default collect => {
  return (settings, event) => {
    const { element, prehidingSelector } = event;
    const { content, meta } = settings;

    // this is a very naive approach, we will expand later
    element.innerHTML = content;

    // after rendering we should show remove the flicker control styles
    showElements(prehidingSelector);

    // make sure we send back the metadata after successful rendering
    collect({ meta: { personalization: meta } });
  };
};
