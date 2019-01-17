export default {
	alias: '',			// string, url friendly, unique per application
	title: '',			// string, readable name
	description: '', 	// string,
	fields: [			// array, array of fields to render

	],
	endpoints: {		// array, object of crud endpoints BEARDS
		browse: {
			verb: 'GET',
			endpoint: ''
		},
		edit: {
			verb: 'POST',
			endpoint: ''
		},
		add: {
			verb: 'PUT',
			endpoint: ''
		},
		read: {
			verb: 'GET',
			endpoint: ''
		},
		'delete': {
			verb: 'DELETE',
			endpoint: ''
		},
		search: {
			verb: 'GET',
			endpoint:
		},
	}
}