import React from 'react';


class CostumersList extends React.Component{


constructor() {
    super();
        this.state = {
           data:
           [
              {
                "fullName":'نیما کمالی',
                "city":1,
                "status":"true"
              },
              {
                "fullName":'سجاد رضایی',
                "city":2,
                "status":"true"
              },
              {
                "fullName":'شهریار فدایی',
                "city":4,
                "status":"false"
              },
              {
                
                "fullName":'رحیم قندی',
                "city":3,
                "status":"true"
            },
            {
                
                "fullName":'شاهرخ سلامت',
                "city":5,
                "status":"false"
            },
           ]
        }
     }
 render() {
     return (
           <div>
              <Header/>
              <table>
                 <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} 
                       data = {person} />)}
                 </tbody>
              </table>
           </div>
        );
     }
  }


class Header extends React.Component {
    render() {
       return (
              <div>

              <section>
         
                  <div>
                      <h1>لیست مشتریان</h1>
                  </div>
         
                  <div class="tbl-header">
                      <table cellpadding="0" cellspacing="0" border="0">
                          <thead>
                              <tr>
                                  <th>وضعیت</th>
                                  <th>شهر</th>
                                  <th>مشتری</th>
                              </tr>
                          </thead>
                      </table>
                  </div>
         
                  {/* <div class="tbl-content">
                      <table cellpadding="0" cellspacing="0" border="0">
                      </table>
                      
                  </div> */}
              </section>
         
          </div>
       );
    }
 }


class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.status}</td>
             <td>{this.props.data.city}</td>
             <td>{this.props.data.fullName}</td>
          </tr>
       );
    }
 }
export default CostumersList;