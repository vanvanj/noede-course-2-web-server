const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
.options({
    a:{
      demand:true,
      alias:'address',
      describe:'address to fetch weather',
      string:true
    }
  })
  .help()
  .alias('help','h')
  .argv

console.log(argv);
geocode.gecoadd

var encodedAddress = encodeURIComponent(argv.address)

request({
  url:'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
  json:true
}, (error) => {
  if (error) {
    console.log('error');
  }
  //console.log(JSON.stringify(body, undefined, 2));
})

var body = {
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "1301",
               "short_name" : "1301",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Lombard Street",
               "short_name" : "Lombard St",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Center City",
               "short_name" : "Center City",
               "types" : [ "neighborhood", "political" ]
            },
            {
               "long_name" : "Philadelphia",
               "short_name" : "Philadelphia",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Philadelphia County",
               "short_name" : "Philadelphia County",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Pennsylvania",
               "short_name" : "PA",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "美国",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "19147",
               "short_name" : "19147",
               "types" : [ "postal_code" ]
            },
            {
               "long_name" : "1003",
               "short_name" : "1003",
               "types" : [ "postal_code_suffix" ]
            }
         ],
         "formatted_address" : "1301 Lombard St, Philadelphia, PA 19147美国",
         "geometry" : {
            "location" : {
               "lat" : 39.9444071,
               "lng" : -75.1631718
            },
            "location_type" : "RANGE_INTERPOLATED",
            "viewport" : {
               "northeast" : {
                  "lat" : 39.9457560802915,
                  "lng" : -75.16182281970849
               },
               "southwest" : {
                  "lat" : 39.9430581197085,
                  "lng" : -75.1645207802915
               }
            }
         },
         "place_id" : "EiwxMzAxIExvbWJhcmQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDcsIFVTQQ",
         "types" : [ "street_address" ]
      }
   ],
   "status" : "OK"
}
