import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            site: null
        }
    }



    render() {
        return (
          <form>
              <label for="email">Email</label>
              <input type="text" id="email"/>
              <label for="site">Site</label>
              <select name="Site" id="site">
                  <option value="SeLoger">SeLoger</option>
                  <option value="SeLogerNeuf">SeLogerNeuf</option>
                  <option value="BD">Belle Demeures</option>
              </select>
              <div class="reasons">
                  {this.props.reasons.map(function(reason, ind) {
                      console.log(reason);
                      return <div>
                          <input type="checkbox" name={reason.name}/>
                          <label for={reason.name}>{reason.value}</label>
                      </div>
                  })}
              </div>

          </form>
        );
    }


}
