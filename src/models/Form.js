import React from 'react';


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            site: null
        }
    }

    prepare_query(){
        const url = "https://ws-gdpr-user-removal.prod.aws.datahub.poliris.net/api/on-demand?bubbles=&mediaPurposes=";
        var website = "";
        var email = "&email=";
        if (this.state.site != null) website += "&webSite=" + this.state.site;
        if (this.state.site != null) email += this.state.email;
        return url + email + website;
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({email: event.data.email, site: event.data.site});
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "accept": "application/json"
            }
        };
        const query = this.prepare_query();
        fetch(query, requestOptions);
    }

    render() {
        return (
            <form ref="form" onSubmit={this.handleSubmit}>
                <label for="email">Email</label>
                <input type="text" id="email"/>
                <label for="site">Site</label>
                <select name="Site" id="site">
                    <option value="SeLoger">SeLoger</option>
                    <option value="SeLogerNeuf">SeLogerNeuf</option>
                    <option value="BD">Belle Demeures</option>
                </select>
                <div>
                    {this.props.reasons.map(function(reason, ind) {
                        return <div>
                            <label for={reason.name}>{reason.value}</label>
                            <input type="checkbox" name={reason.name}/>
                        </div>
                    })}
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }


}
