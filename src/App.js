import React, { Component } from 'react';

import RadioButtonTable from './RadioButtonTable';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            selectedRadioItem:{}
            
        }
        this.onChange = this.onChange.bind(this);
    }

    handleRadioChange(item){
        
        console.log('chosen item', item);
        this.setState({selectedRadioItem: item});
    }



    

    render() {
        let dataHeader = [
            {
                name: 'number',
                title: 'Account Number',
                isCurrency: false,
                isDate: false,
                isNumber: true
            },
            {
                name: 'type',
                title: 'Account Type',
                isCurrency: false,
                isDate: false,
                isNumber: false
            },
            {
                name: 'sol',
                title: 'Account Sol',
                isCurrency: false,
                isDate: false,
                isNumber: false
            },
            {
                name: 'currency',
                title: 'Currency',
                isCurrency: true,
                isDate: false,
                isNumber: false
            },
            {
                name: 'date',
                title: 'Date',
                isCurrency: false,
                isDate: true,
                isNumber: false
            }
        ];

        let dataBody = [
            { id:5,number: '1234567890', sol: '115', type: 'Savings Account', currency: '100',date: '11/9/2018' },
            { id:6,number: '1234586890', type: 'Domicilliary Account', sol: '116', currency: '200',date: '2/20/2019' },
            { id:8,number: '1234567890', type: 'Savings Account', sol: '117', currency: '300',date: '3/3/2019' },
            { id:10,number: '1847567890', type: 'Savings Account', sol: '118', currency: '400',date: '3/25/2015' },
            { id:11,number: '123444890', type: 'Savings Account', sol: '119', currency: '500',date: '3/24/2018' },
            { id:12,number: '1234544490', type: 'Savings Account', sol: '112', currency: '600',date: '2/5/2012' }
        ];



        

        

        const { accountNumber1, accountNumber2, firstName, lastName, selectedRadioItem} = this.state;
        
        

        return (
            <div>

                <RadioButtonTable
                dataHeader={dataHeader} 
                dataBody={dataBody} 
                name='bank_table3' 
                selectedRadioItem={selectedRadioItem}
                handleRadioChange = {this.handleRadioChange.bind(this)}
                
                />  
                
            </div>
        );

    };
}


export default App;