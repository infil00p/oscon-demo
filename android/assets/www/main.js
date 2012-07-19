/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/

var displayInfo = function() {
    console.log('Getting display attributes');
    document.getElementById("px_density").innerHTML = window.devicePixelRatio;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("cWidth").innerHTML = document.documentElement.clientWidth;
    document.getElementById("cHeight").innerHTML = document.documentElement.clientHeight;
    document.getElementById("iWidth").innerHTML = window.innerWidth;
    document.getElementById("iHeight").innerHTML = window.innerHeight;
};

var init = function()
{
    document.addEventListener("deviceready", displayInfo, true);
    window.addEventListener('resize', displayInfo, true);

    //2nd part of the demo
    window.addEventListener('resize', loadIcons, true);
    loadIcons();
}

