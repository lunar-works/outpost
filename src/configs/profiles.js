export default {
	alias: 'profiles',			// string, url friendly, unique per application
	title: 'Profiles',			// string, readable name
	description: 'These are profiles', 	// string,
	fields: [{			// array, array of fields to render
		name: 'title',
		label: 'Profile Title',
	    required: true
	},{
		name: 'content',
		label: 'Profile Content',
		required: true
	}],
	endpoints: {		// array, object of crud endpoints BEARDS
		browse: {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/posts.json'
		},
		edit: {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/post.json'
		},
		add: {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/post.json'
		},
		read: {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/post.json'
		},
		'delete': {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/post.json'
		},
		search: {
			verb: 'GET',
			endpoint: 'https://outpost.lunarworks.io/posts.json'
		},
	}
}