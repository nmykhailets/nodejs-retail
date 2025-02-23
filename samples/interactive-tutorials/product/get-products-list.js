// Copyright 2022 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

async function main() {
  // [START retail_get_products_list]

  // Imports the Google Cloud client library.
  const {ProductServiceClient} = require('@google-cloud/retail').v2;

  const projectNumber = process.env['GCLOUD_PROJECT'];

  // Placement
  const parent = `projects/${projectNumber}/locations/global/catalogs/default_catalog/branches/default_branch`;

  // Instantiates a client.
  const retailClient = new ProductServiceClient();

  async function callListProducts() {
    console.log('Start get products list');
    // Construct request
    const request = {
      parent,
    };
    console.log('List of products request:', request);

    // Run request
    const iterable = await retailClient.listProductsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
    console.log('Get products list finished');
  }

  callListProducts();
  // [END retail_get_products_list]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main();
