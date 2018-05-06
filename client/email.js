if (Meteor.isClient) {

	Template.email.events ({
		'submit #email-form': function(e,t){

			e.preventDefault();
			var fromAddr=t.find('#email').value;
			var fromName=t.find('#name').value;
			var body=t.find('#message').value;

			if (fromAddr.length >0 && fromName.length>0 && body.length>0){
					alert("Message envoyé !");
                    Meteor.call('sendEmail',fromAddr,fromName,body );
				}
			else {
				alert("Veuillez remplir correctement tous les champs.");
			}

			


	}
}) 

}
