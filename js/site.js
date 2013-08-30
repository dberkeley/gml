// JavaScript Document

var base_site="http://stage3.guardian.co.tt/mobileapps/";


push = window.plugins.pushNotification;

// Callback for when a device has registered with Urban Airship.
push.registerEvent('registration', function (error, id) {
    if (error) {
        console.log('There was an error registering for push notifications');
    } else {
        console.log("Registered with ID: " + id);
    }
});

// Callback for when the app is running, and receives a push.
push.registerEvent('push', function (push) {
    console.log("Got push: " + push.message)
});

// Set tags on a device, that you can push to
// https://docs.urbanairship.com/display/DOCS/Server%3A+Tag+API
push.setTags(["loves_cats", "shops_for_games"], function () {
    push.getTags(function (obj) {
        obj.tags.forEach(function (tag) {
            console.log("Tag: " + tag);
        });
    });
});

// Set an alias, this lets you tie a device to a user in your system
push.setAlias("awesomeuser22", function () {
    push.getAlias(function (alias) {
        console.log("The user formerly known as " + alias)
    });
});

// Check if push is enabled
push.isPushEnabled(function (enabled) {
    if (enabled) {
        console.log("Push is enabled! Fire away!");
    }
})



$(document).ready(function(){
	$("#menu").click(function(){
		$( "#mypanel" ).panel( "open", "swipeClose", false );
	});
	
})

function views(name){
	
	var feed = base_site+"views/queues/?format_output=1&display_id="+name;
	$.ajax({
	  dataType: 'jsonp',
	  url: feed,
	  success: function (data) {
		 $('article').html(data);
		 
	 }
	});
	
}

function urls(uri){
	var feed = base_site+"url/retrieve";
	$.ajax({
	  dataType: 'jsonp',
	  url: feed,
	  success: function (data) {
		 $.each( data, function( key, value ) {
			 if ("/guardianm/"+value.alias == uri){
			 alert(value.source);
		 }
		 })
		 
	 }
	});

}