




if (Meteor.isServer){
	Meteor.startup(function () {

		//process.env.MAIL_URL ='smtps://apikey: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@smtp.sendgrid.net';
		//Meteor.Mailgun.config({
		//	username: 'postmaster%40sandboxc46819f260f4445ca07708c8733e23b2.mailgun.org',
		//	password: '3b39c58c38d21548b7618cc87cd6c090'

		//});

		process.env.MAIL_URL='smtps://postmaster%40sandbox60ec24f2ec664a77a574848b0ee5d4a4.mailgun.org:0a69bc6b5c0a07cea211e9f0a458fd88@smtp.mailgun.org:465?tls.rejectUnauthorized=false';
		
	});   



	Meteor.methods({
 		   'sendEmail': function(to,name,text ){
 		   
 			
 			this.unblock();
 			console.log("about to send an email...");

 			

 			Meteor.Mailgun.send({
 				to:"contact@imagine-conseil.fr",
 				from: 'no-reply@imagineconseil.com',
 				subject:"Message envoyé depuis le site Internet par : "+ name,
 				text:text +" \n \nMessage envoyé par "+ name + " avec l'adresse "+ to

 				});


 			/*

 			var lib = require('email'),
 			 Email = lib.Email;
    
			lib.from = 'someAddress@youAlwaysSendFrom.com'

			// no need to set the from property, already set
			var mail = new Email({
			 to: to,
			  subject: name,
			   body: text,
			})
			mail.send()

			*/
 			


			  


 			
 			console.log("email sent!");

 		}


	})

}