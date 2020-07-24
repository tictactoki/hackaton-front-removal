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
        console.log(this.props.reasons);
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
                  {this.props.reasons.map(function(reason, ind) {
                      console.log(reason);
                      return <div>
                          <label for={reason.name}>{reason.value}</label>
                          <input type="checkbox" name={reason.name}/>
                      </div>
                  })}
              </div>

          </form>
        );
    }


}
