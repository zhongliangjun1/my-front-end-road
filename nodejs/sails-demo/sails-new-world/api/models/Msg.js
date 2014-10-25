/**
* Msg.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name: {
  		type: 'string',
  		required: true
  	},
  	sex: {
  		type: 'string',
  		enum: ['male', 'female'],
  		defaultsTo: 'male'
  	},
  	img: {
  		type: 'string',
  		required: true
  	},
  	msg: {
  		type: 'string',
  		required: true
  	}

  }
};

