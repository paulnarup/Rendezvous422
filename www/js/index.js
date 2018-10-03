/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        
        var geoOptions = {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 10000
        }
        navigator.geolocation.getCurrentPosition(app.geoSuccess, app.geoFail, geoOptions);   
         
        //this.receivedEvent('deviceready');
    },

    geoSuccess: function(position){
        alert("success");
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var mapOptions = {
          center: latLongPosition,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var latLongPosition = new google.maps.LatLng(latitude, longitude, mapOptions);
        var div = document.getElementById("map_canvas");
        var map = plugin.google.maps.Map.getMap(div);
        map.animateCamera({
            target: {lat: latitude, lng: longitude},
            zoom: 17,
            tilt: 60,
            bearing: 140,
            duration: 5000
        });
        console.log(longitude + "\n" + latitude);
    },

    geoFail: function(error){
      console.log("the code is " + error.code + ". \n" + "message: " + error.message);
      alert("ERROR");
    },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
app.initialize();