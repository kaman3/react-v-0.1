import React from "react";
import swal from 'sweetalert';

class Content extends React.Component{

    getData = selector => {
        
        if(selector){

           let valueFiedForm = document.querySelector(selector).value;
           if(valueFiedForm){
               return valueFiedForm;
           }else{
               document.querySelector(selector).style.border = "1px solid #C93E2F"; 
               return undefined;
           }
        } 

    }
    
    getForm =  event => {
        
        event.preventDefault();

        let idn = document.querySelector("input[name='idn']").value;
        let fio = this.getData("input[name='fio']");  
        let phone = this.getData("input[name='phone']");
        let email = this.getData("input[name='email']");
        
        if(idn.length < 10 || idn.length > 11){
           
            swal({
               title:"Ошибка",
               text:"Промокод должен содержать 11 цифр",
               icon:"исправить",
               confirmButtonColor:"#b7c8d2"
            });

           return false;           
        }

    }

    render(){
        return(
            <div className = "row">
                <div className = "col-lg-7">
                     левая часть
                </div>
                <div className = "col-lg-5">
                     <div className = "registrationCupon">
                          <h1>Регистрация купона</h1>
                     </div>
                     <div className = "form">
                          <form>
                            <div className="form-group">
                                <input type="text" name = 'idn' className="form-control" id="idn" placeholder="Индентификатор"/>
                                <input type="text" name = "fio" className="form-control" id="fio" placeholder="ФИО"/>
                                <input type="text" name = "phone" className="form-control" id="phone" placeholder="Контактный номер телефона"/>
                                <input type="text" name = "email" className="form-control" id="email" placeholder="Ваш email"/>
                                <button type="submit" className="btn btn-primary btn-askent" onClick = {this.getForm}>Зарегистрировать</button>
                            </div>
                          </form>
                     </div>
                </div>
            </div>
        );
    }
}

export default Content;