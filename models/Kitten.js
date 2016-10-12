var mongoose = require('mongoose')
var Schema = require('mongoose/lib/schema.js')

var KittenSchema = mongoose.Schema({
	name:{type:String, required:true}
})

var Kitten = mongoose.model('Kitten', KittenSchema);

module.exports = Kitten;
