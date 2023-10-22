import { render } from "@testing-library/react";
import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(e,i){
        this.setState({hasError:true})
    }

    render(){
        if (this.state.hasError) {
            return <h1>Oops thats not good </h1>
        }
        return this.props.children
}}
export default ErrorBoundry;