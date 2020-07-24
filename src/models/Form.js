import React from 'react';


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            site: null
        }
        this.emailChange = this.emailChange(this);
    }


    emailChange(event) {
        this.setState({email: this.state.email});
    }

    render() {
        return (
          <form>
              <label for="email">Email</label>
              <input type="text" id="email" onChange={this.emailChange}/>
              <label for="site">Site</label>
              <select name="Site" id="site">
                  <option value="SeLoger">SeLoger</option>
                  <option value="SeLogerNeuf">SeLogerNeuf</option>
                  <option value="BD">Belle Demeures</option>
              </select>
              <div>
                <div>
                    <label for="trust">Je n'ai pas confiance dans le traitement de mes données personnelles</label>
                    <input type="checkbox" name="trust"/>
                </div>
                  <div>
                    <label for="spam">Je reçois trop d'email/sms</label>
                    <input type="checkbox" name="spam"/>
                </div>
              </div>

          </form>
        );
    }


}
