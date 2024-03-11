const fs = require('fs')
const functions = require("firebase-functions");
const admin =  require('firebase-admin');
const { render_resume } = require('./json-resume/render-html');
const { resumeBasicsQuery, projectsQuery, profilesQuery, summaryQuery, currentLocationsQuery, educationQuery, skillsQuery, interestsQuery, jobsQuery, themesQuery } = require('./qurries');

admin.initializeApp();

exports.updateResume = functions.https.onRequest( async (request, response) => {
  console.log()
  const {Storage} = require('@google-cloud/storage');
  const storage = new Storage();
  const bucket = storage.bucket(JSON.parse(process.env.FIREBASE_CONFIG).storageBucket);
  const [
    basics,
    profiles,
    location,
    projects,
    education,
    skills,
    interests,
    work,
    theme
  ]  = await Promise.all([
    await resumeBasicsQuery(),
    await profilesQuery(),
    await currentLocationsQuery(),
    await projectsQuery(),
    await educationQuery(),
    await skillsQuery(),
    await interestsQuery(),
    await jobsQuery(),
    await themesQuery()
  ]);
  const resume =   {
      "basics": {
        ...basics,
        profiles,
        location 
      },
      projects,
      education,
      skills,
      interests,
      work
  };
  const html = await render_resume({ resume ,themePath : `./node_modules/jsonresume-theme-${theme}`});
  
  let status;
  const fileName = bucket.file('index.html')
  await fileName.save(html, function(err) {
    if (!err) {
      // console.log(`Successfully uploaded ${fileName}`)
      status = {status: 200  }
    }});
  
  response.send(status || {status: 500  } ) ;
  throw new Error('This is sctually not an error I just want the function to run cold');
});


exports.resume = functions.https.onRequest( async (request, response) => {
  const {Storage} = require('@google-cloud/storage');
  const storage = new Storage();
  const bucket = storage.bucket(JSON.parse(process.env.FIREBASE_CONFIG).storageBucket);
  const readhtml = await bucket.file('index.html')
  let contents;
  await readhtml.download()
    .then(data => {
        contents = data[0];
    });
  const html =  contents.toString('utf8')
  response.send(html);
});

