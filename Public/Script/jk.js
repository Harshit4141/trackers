function initMap()
        {
            
            var options={
                zoom:5,
                center:{lat:26.8467,lng:80.9462}
            }
            var map=new google.maps.Map(document.getElementById('map'),options);

             const marker = new google.maps.Marker({
                position:{lat:25.3427,lng:81.9105},
                map: map,
                // icon:''copy kro koi bhi icon jo lgana chahte ho
            
            });









                if(navigator.geolocation)
                {
                    navigator.geolocation.getCurrentPosition(showExactPosition)
                    
                    
                }
                else
                    x.innerHTML="hii";
                

                    



            function showExactPosition(position){
                    let myLat=position.coords.latitude;
                    console.log(myLat);
                    let myLong=position.coords.longitude;
                    console.log(myLong);

                    var coords=new google.maps.LatLng(myLat,myLong);
                    var mapOptions={
                        zoom:6,
                        center:coords,
                        mapTypeId:google.maps.MapTypeId.ROADMAP
                                  }

                    // x.innerHTML="latitude "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
                    // // mark karne ke liye mtlab tab bhi hme jaise ki jab hum search karte hai google map pe to apna location pe ek red color ka icon aajata hai vhi lane ke liye hum ye karte hai
                    const marker = new google.maps.Marker({
                    position:coords,
                    map: map
                    // icon:''copy kro koi bhi icon jo lgana chahte ho
                    });
            }


            // 25.3433° N, 81.9085° E hostel location









    }