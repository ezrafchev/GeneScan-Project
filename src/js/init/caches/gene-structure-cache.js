/**
 * @fileoverview Fetch cached gene structure data: transcript, subparts, etc.
 *
 * Gene structure cache eliminates needing to fetch features of genes from
 * third-party APIs at runtime.  It achieves this by fetching a static file
 * containing gene structure data upon initializing Ideogram.
 *
 * Use cases:
 *
 * - show gene's canonical Ensembl transcript, including its UTRs and exons
 */

import {getCacheUrl, supportsCache} from './cache-lib';

const cacheWorker = new Worker(
  new URL('./gene-structure-cache-worker.js', import.meta.url),
  {type: 'module'}
);

let perfTimes;

/**
* Fetch cached gene structure data, transform it, and set it as ideo prop
*/
export default async function initGeneStructureCache(
  orgName, ideo, cacheDir=null
) {

  const startTime = performance.now();
  perfTimes = {};

  // Skip initialization if files needed to make cache don't exist
  if (!supportsCache(orgName, 'GeneStructure')) return;

  // Skip initialization if cache is already populated
  if (Ideogram.geneStructureCache && Ideogram.geneStructureCache[orgName]) {
    // Simplify chief use case, i.e. for single organism
    ideo.geneStructureCache = Ideogram.geneStructureCache[orgName];
    return;
  }

  if (!Ideogram.geneStructureCache) {
    Ideogram.geneStructureCache = {};
  }

  const cacheUrl = getCacheUrl(orgName, cacheDir, 'gene-structures');

  // console.log('before posting message');
  cacheWorker.postMessage([cacheUrl, perfTimes]);
  // console.log('Message posted to gene structure cache worker');

  cacheWorker.addEventListener('message', event => {
    let featuresByGene;
    const results = event.data;
    [featuresByGene, perfTimes] = results;
    ideo.geneStructureCache = featuresByGene;
    Ideogram.geneStructureCache[orgName] = ideo.geneStructureCache;

    if (ideo.config.debug) {
      perfTimes.total = Math.round(performance.now() - startTime);
      console.log('perfTimes in initGeneStructureCache:', perfTimes);
    }
  });
}
