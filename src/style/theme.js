const theme = {
    main: {
        background: '#f1f1f1',
        font: 'sans-serif',
        borderRadius: '4px'
    },
    headings: {
        color: '#666',
        h1: {
            size: '3rem'
        },
        h2: {
            size: '2.5rem'
        },
        h3: {
            size: '2rem'
        },
        h4: {
            size: '1.5rem'
        },
        h5: {
            size: '1rem'
        },
        h6: {
            size: '0.5rem'
        }
    },
    containers: {
        background: '#fff',
        border: '1px solid #ccc',
        padding: '1rem 2rem'
    },
    buttons: {
        borderRadius: () => theme.main.borderRadius
    }
}

export default theme