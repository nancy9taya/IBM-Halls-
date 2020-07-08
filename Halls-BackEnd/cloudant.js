
const env = require('dotenv').config();

// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');
const mongoose = require('mongoose');
const User = require('./models/User');
// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "nodejs";
var password = process.env.cloudant_password;
var cloudant = new Cloudant({ url:"https://4cf5dc48-8705-49e2-9672-a6542a0aaea9-bluemix.cloudant.com" , plugins: { iamauth: { iamApiKey: "wvxUMFT5UgL7ZEL_ARKwA-AifCrWVicETFDXAN4AQJ4c" } } });

let db = cloudant.use('collage_app');
cloudant.db.list(function(err, body) {
    body.forEach(function(db) {
     console.log(db);
     });
    });

function create( name) {
    return new Promise((resolve, reject) => {
       // let itemId = uuidv4();
        let whenCreated = Date.now();
        const user = new User({
            _id: "5eea35fdb6af2b1904f1e6033",
            _rev:"1-3c24ef5073e838e9bc0ac46418f244a33",
            name:"nancy hassan",
            email: "nancy.hassan1998@gmail.com",
            password: "123",
            birthDate:"12/2/1998",
            gender:"true",
            type:"artist"

          });
        db.insert(user, (err, result) => {
            if (err) {
                console.log('Error occurred: ' + err.message, 'create()');
                reject(err);
            } else {
                resolve({ data: { createdId: result.id, createdRevId: result.rev }, statusCode: 201 });
            }
        });
    });
}
/*db.get('123jcjfkjgiojds38ije4', (err, document) => {
    if (err) {
     console.log(err);
    } else {
     //   console.log(document);}
    
    
});*/
var cities = [
    { "_id":"Boston",
      "type":"Feature",
      "geometry": {
        "type":"Point","coordinates": [-71.063611, 42.358056]
      }
    },
    { "_id":"Houston",
      "type":"Feature",
      "geometry": {
        "type":"Point","coordinates": [-95.383056, 29.762778]
      }
    },
    { "_id":"Ruston",
      "type":"Feature",
      "geometry": {
        "type":"Point","coordinates": [-92.640556, 32.529722]
      }
    }
  ];
  
 /* db.bulk({ docs: cities }, function(err) {
    if (err) {
      throw err;
    }
  
    console.log('Inserted all cities');
  });*/
    function update(name, id) {
    return new Promise((resolve, reject) => {
        db.get(id, (err, document) => {
            if (err) {
                resolve({statusCode: err.statusCode});
            } else {
                console.log(document);
                let item = {
                    _id: document._id,
                    _rev: document._rev
                } 
                item["name"] = name;
            
           
                db.insert(item, (err, result) => {
                    if (err) {
                        console.log('Error occurred: ' + err.message, 'create()');
                        reject(err);
                    } else {
                        resolve({ data: { updatedRevId: result.rev }, statusCode: 200 });
                    }
                });
            }            
        })
    });
}
 var x='123jcjfkjsdfsgioj538ije4';
//update("fola","123jcjfkjgiojds38ije4");
function find( partialName, userID) {
    return new Promise((resolve, reject) => {
  
        db.find({ selector: {name:'fola' } }, (err, documents) => {
            if (err) {
                reject(err);
            } else {
                resolve({ data: JSON.stringify(documents.docs), statusCode: 200});
                console.log( JSON.stringify(documents.docs[0]));
                console.log( documents.docs.length);
            }
        });
    });
}
find();
