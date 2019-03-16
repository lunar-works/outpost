import React, {PureComponent} from 'react'
import api from '../../../utils/api' 
export const AuthContext = React.createContext({auth: false});

class Auth extends PureComponent {
    constructor(){
        super()
        this.state = {
            auth: false
        }
    }
    async componentDidMount(){
        if(this.state.auth === true) return
        try {
            const logged = await api.get('current')
            this.setState({auth: true})
        } catch(e) {
            
        }        
    }
    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default Auth