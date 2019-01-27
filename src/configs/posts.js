export default {
	alias: 'posts',			// string, url friendly, unique per application
	title: 'Posts',			// string, readable name
	description: 'These are posts', 	// string,
	fields: [{			// array, array of fields to render
		name: 'title',
		label: 'Post Title',
		required: true,
		editable: true,
		input: 'textarea',
		type: 'string',
		summary: true
	},{
		name: 'content',
		label: 'Post Content',
		required: true,
		editable: true,
		type: 'string',
		summary: true
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