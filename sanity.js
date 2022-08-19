import {
  createCurrentUserHook,
  createClient,
} from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  //

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-03-10',

  // set useCdn to 'false' if your application require the freshest possible data always,
  // authenticated request will always bypass the CDN

  useCdn: process.env.NODE_ENV === 'production',
}

// setup the clint for fetching the data in the getProps page functions
export const sanityClient = createClient(config)

// for generating the imageUrl with only the asset reference data in document

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// helper function for using the current logged in user account

export const useCurrentUser = createCurrentUserHook(config)
