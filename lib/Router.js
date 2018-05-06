Router.configure({
    layoutTemplate: "layout"
});




Router.route('/', {
	name: "nous",
	template: "nous"
});


Router.route('/deroulement', {
	name: "deroulement",
	template: "deroulement"
});

Router.route('/competences', {
	name: "competences",
	template: "competences"
});

Router.route('/pourquoi', {
	name: "pourquoi",
	template: "pourquoi"
});

Router.route('/email', {
	name: "email",
	template: "email"
});


Router.route('/je', {
	name:"je",
	template: "je"

});

