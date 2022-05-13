const axios = require("axios");
const request = require("request-promise");
const cheerio = require('cheerio');
const  validUrl = require('valid-url');

const getFighters = async (app) => {
  const api = app.get('api');
  const result = await axios({
    url: `${api.baseUrl}scores/json/Fighters`,
    method: 'get',
    params: {
      key: api.key
    },
  });

  let countUpdate = 0;
  let countCreate = 0;

  await Promise.all(result.data.map(async(d) => {
    const _id = d.FighterId;
    let pictures;
    if (d.Weight && d.Height && d.Reach) {
      try {
        const entity = await app.service('fighters').get(_id)
        countUpdate ++;
        if (!d.avatar && !d.banner) {
          const name = (`${d.FirstName}-${d.LastName}`).replace(/ /g,"-");
          pictures = await getFighterPictures(app, name)
        }
        return await app.service('fighters').update(entity._id, { ...d, ...pictures });
      } catch (error) {
        countCreate++
        return await app.service('fighters').create({ _id, ...d, ...pictures })
      }
    }
  }));

  return `created: ${countCreate}, updated: ${countUpdate}`
}

const getFighterPictures = async (app, name) => {
  const options = {
    url: `${app.get('ufc')}${name}`,
    method: 'GET',
  };

  // Return new promise
  if (!validUrl) return Promise.resolve();
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, html) {
      if (err) {
        resolve({ avatar: null, banner: null });
      } else {
        const result = cheerio.load(html);
        resolve({
          avatar: result('.c-bio__image')?.children()?.attr('src'),
          banner: result('.c-bio__image--mobile')?.children()?.attr('src')
       });
      }
    })
  })
}

module.exports = {
  getFighters,
  getFighterPictures
}
