// Import all
import * as cloudinary from 'cloudinary';

// use
cloudinary.v2.config({cloud_name:'demo'})
console.log(cloudinary.v2.url('sample'));

// alternative import
import {v2} from 'cloudinary';

// use
v2.config({cloud_name:'demo'});
console.log(v2.url('sample'));

