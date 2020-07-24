import React from 'react';


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            site: null
        }
        this.prepare_query = this.prepare_query.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    prepare_query(email, site) {
        const url = "https://ws-gdpr-user-removal.prod.aws.datahub.poliris.net/api/on-demand?bubbles=&mediaPurposes=";
        var website = "";
        var prefix_email = "&email=";
        website += "&webSite=" + site;
        prefix_email += email;
        return url + prefix_email + website;
    }

    handleSubmit(event){
        event.preventDefault();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "accept": "application/json"
            }
        };
        const query = this.prepare_query(event.target.email.value, event.target.site.value);
        fetch(query, requestOptions);
    }

    render() {
        return (
            <form ref="form" onSubmit={this.handleSubmit}>
                <label for="email">Email</label>
                <input type="text" placeholder="email@email.com" id="email"/>
                <label for="site">Site</label>
                <select name="Site" id="site">
                    <option value="SeLoger" selected="selected">SeLoger</option>
                    <option value="SeLogerNeuf">SeLogerNeuf</option>
                    <option value="BelleDemeures">Belle Demeures</option>
                </select>
                <div class="reasons">
                    {this.props.reasons.map(function(reason, ind) {
                        return <div>
                            <input type="checkbox" name={reason.name}/>
                            <label for={reason.name}>{reason.value}</label>
                        </div>
                    })}
                    <div class="other">
                        <input type="checkbox" name="othercheck"/>
                        <label for="other">Autre...</label>
                        <input class="textarea" type="textarea" name="other"/>
                    </div>
                </div>
                <button type="submit">Je supprime mes données</button>
            </form>
        );
    }


}
