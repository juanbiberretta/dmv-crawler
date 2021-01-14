/* eslint-disable @typescript-eslint/no-unused-vars */
import fetch from 'node-fetch';

const getDatesUrl = (branchNameId: string) => {
  const permitServiceId =
    '10226f4de0f460aa67bb735db97f9eb434b8ac2a144e40a20ff1e1848ffbeae7';
  // const availableServiceIdForTest =
  //   '4ec745aaba5800ddb8fea03c823118afe3a65f4635f12e8ec69b9df5d10a0eec';
  const nowDate = Date.now();
  return `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule/branches/${branchNameId}/services/${permitServiceId}/dates?_=${nowDate}`;
};

const serviceLocations = [
  {
    id: '1182b855bd56271c687d54d6d7f9559926297a76260f8329574d3396bf810763',
    name: 'Brooklyn License Center',
    address: '1350 Commerce Ave',
  },
  {
    id: '99f6c320206ee03f9dcce5b83eddcbfd30cd2e30bbe53c51d7116c2b33ce9ccd',
    name: 'Bronx Registration Center',
    address: '696 East Fordham Rd',
  },
  {
    id: 'c92d2048b00326a0d9452e478db504ce41ec8f67f8e008034295cbf85cf902df',
    name: 'Brooklyn - Atlantic Center Mall',
    address: '625 Atlantic Ave, 2nd Floor, Brooklyn, NY',
  },
  {
    id: '0b2bd54bb4e54eae475cf1b266cf85bec683771e5e231af74e292177ae5e2640',
    name: 'Brooklyn - Coney Island',
    address: '2875 West 8th Street, Brooklyn, NY',
  },
  {
    id: 'ba4178c73f0cb0c91cf158865f174487cd4dcc79a86bdbbe5502730ed7e7b5b1',
    name: 'Manhattan - Harlem',
    address: '159 East 125th Street, 3rd Floor',
  },
  {
    id: '8bcc5ca5cad16666ba6f5dd43d15241e172bd511f7e8d6f2e1caa2380b66776a',
    name: 'Manhattan - Lower Manhattan (Financial District)',
    address: '11 Greenwich St',
  },
  {
    id: '0ea16b72515a86e0cc00d186b249b0ebc61ed10b5289394af9b0cab8de5dafda',
    name: 'Manhattan - Midtown Manhattan (Near Penn Station)',
    address: '366 West 31st Street',
  },
  {
    id: 'fb052d6eae67926d8d5449d7317c8528e1e3d02b19441ead85f3150915e2abbe',
    name: 'Queens - College Point',
    address: '30-56 Whitestone Expressway',
  },
  {
    id: 'd0099bebf8e51979019b5e45b2c7dfeab9830f0213a4da0cfd569ec145eb07a9',
    name: 'Queens - Jamaica',
    address: '168-46 91st Avenue, 2nd Floor',
  },
  {
    id: '887df9bcd65c813a07ac3ae5e818d4faec1aa02bb467ea5cb2e1e2e878bfa32a',
    name: 'Queens - Queens College License Center',
    address: `Queens Hall, Room 130 65-21 Main St Flushing, NY 11367`,
  },
  {
    id: '2da2cfd743542bc26618bf7d35559501aee630de80c66a5f884f86d61bc5e780',
    name: 'Queens - Springfield Gardens',
    address: '168-35 Rockaway Blvd',
  },
];

const crawler = async () => {
  const dates = await Promise.all(
    serviceLocations.map(async (location) => {
      const url = getDatesUrl(location.id);
      console.log('Fetching dates for: ', location.name);
      console.log('URL: ', url);

      try {
        const dates = await fetch(url);
        const json: readonly { readonly date: string }[] = await dates.json();
        if (json && json.length > 0) {
          console.log('Got dates for ', location.name, json);
        }
      } catch (e) {
        console.error('There was a problem fetching: ', url, e);
      }
    })
  );
};

crawler();
