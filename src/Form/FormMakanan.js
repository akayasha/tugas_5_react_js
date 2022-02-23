import React ,{Component} from 'react';

class FormMakanan extends Component{
  constructor(props){
    super(props);
    this.state = {
      pesanan : " ",
      jumlah : " "
    }
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handlechangejumlah = this.handlechangejumlah.bind(this);
  }

  handlechange(e){
    this.setState({pesanan : e.target.value});
  }

  handlechangejumlah(e){
    this.setState({jumlah : e.target.value});
  }

  handlesubmit(e){
    e.preventDefault();
    alert(
      'pesanan anda adalah : ' + this.state.pesanan +
      ' |  jumlah pesanan : ' +  this.state.jumlah
    );

  this.setState({pesanan : ' ' , jumlah : ' '});
  this.pesanan.ref.focus();
}

render(){
  return(
    <div>
      <center>
        <form onSubmit ={this.handlesubmit}>
          <input
            onChange ={this.handlechange}
            type = 'text'
            value = {this.state.pesanan}
            ref = {this.pesanan}
            placeholder = 'masukan pesanan anda ' />
          <input
            type ='number'
            value = {this.state.jumlah}
            onChange = {this.handlechangejumlah}
            placeholder = 'masukan jumlah pesanan' />
          <br /> <br/>
          <input type = 'submit' value ='pesan' />
        </form>
      </center>
    </div>
  )
}
}

export default FormMakanan;
