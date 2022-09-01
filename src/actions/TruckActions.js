import {
    SHOW_EDIT_POPUP_TRUCK,
    HIDDEN_EDIT_POPUP_TRUCK,
    GET_LIST_TRUCKS,
    EDIT_TRUCK,
    DELETE_TRUCK,
    HIDDEN_DELETE_POPUP_TRUCK,
    SHOW_DELETE_POPUP_TRUCK,
    CREATE_TRUCK,
    SET_ID_SELECTED_TRUCK,
    UPDATE_LIST_TRUCKS_FILTER
} from '../Types';

import TruckService from '../Services/TruckService';
import Alert from '../Components/Alert/Alert';

export function ShowEditPopupTruck(alerta)
{
    return (dispatch) => {
        dispatch(showEditPopupTruck(alerta))
    }
}

const showEditPopupTruck= alerta =>({
    type:SHOW_EDIT_POPUP_TRUCK,
    payload:alerta 
})

export function ShowDeletePopupTruck(alerta)
{
    return (dispatch) => {
        dispatch(showDeletePopupTruck(alerta))
    }
}

const showDeletePopupTruck= alerta =>({
    type:SHOW_DELETE_POPUP_TRUCK,
    payload:alerta 
})

export function HiddenEditPopupTruck (alerta){
   return (dispatch) =>{
       dispatch(hiddenEditPopupTruck(alerta))

   }
}

const hiddenEditPopupTruck = alerta =>({
    type:HIDDEN_EDIT_POPUP_TRUCK,
    payload:alerta
});

export function HiddenDeletePopupTruck(alerta){
   return (dispatch) =>{
       dispatch(hiddenDeletePopupTruck(alerta))
   }
}

const hiddenDeletePopupTruck = alerta =>({
    type:HIDDEN_DELETE_POPUP_TRUCK,
    payload:alerta
});

export function GetlistTrucks (alerta,{t}){
   return async (dispatch) =>{                       

    const listTrucks = [
        { id:1  ,nombre: 'Apple'  ,  marca:'Volskwagen'  ,  modelo:  'FX60',  matricula:'X567a'  },
        { id:2  ,nombre: 'Apricot',  marca:'Volskwagen'    ,  modelo: 'FX61',  matricula: 'X569a'  },
        { id:3  ,nombre: 'Honeyberry' ,  marca: 'Volskwagen' ,  modelo:'FX62' ,  matricula:  'X27a' },
        { id:4  ,nombre: 'Papaya' ,  marca: 'Volskwagen'  ,  modelo: 'FX65',  matricula: 'X5347a' },
        { id:5  ,nombre: 'Jambul',  marca: 'ferrari'  ,  modelo: 'Panini' ,  matricula: 'X56227a' },
        { id:6  , nombre: 'Plum' ,  marca: 'seat'  ,  modelo: 'Panda',  matricula: 'X562s7a'},
        { id:7  ,nombre: 'Lemon' ,  marca: 'seat' , modelo: 'Panda' ,  matricula: 'X56227a'},
        { id:8  ,nombre: 'Pomelo',  marca: 'seat' ,  modelo:  'Panda',  matricula:  'X562ss27a' }
      ];
    
      debugger;
    dispatch(getlistTrucks(listTrucks));
          
   }
}

const getlistTrucks = listTrucks =>({
    type:GET_LIST_TRUCKS,
    payload:listTrucks
});

export function EditTrucks(TruckSelected,{t}){
    debugger;
   return async (dispatch) =>{    
        debugger;
        dispatch(editTruck(TruckSelected));
        Alert(t('actualizadocorrectamen'),t('registroactualizadocor'),'success');                      
   }
}

const editTruck = TruckSelected =>({
    type:EDIT_TRUCK,
    payload:TruckSelected
});

export function DeleteTrucks(id,currentPage,setCurrentPage,{t}){
    debugger;
    return async (dispatch) =>{   
        dispatch(deleteTruck(id));
        setCurrentPage(currentPage-1);
        Alert(t('eliminadocorrectamente'),'El registro ha sido eliminado con exito.','success');    
    }
 }
 
 const deleteTruck = Truckid =>({
     type:DELETE_TRUCK,
     payload:Truckid
 });


 export function CreateTruck(Truck,history,{t}){
    debugger;
    return async (dispatch) =>{   
        debugger;
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        Truck.id = rand;
        dispatch(createTruck(Truck));
        Alert('Camion creado correctamente','El registro ha sido creado con exito.','success');
        history.push('/TrucksPage');          
    }
 }
 
 const createTruck = Truck =>({
     type:CREATE_TRUCK,
     payload:Truck
 });

 export function SetIdTruckselected(id){
    return async(dispatch) =>{   
        dispatch(setIdTruckselected(id));                  
    }
 }

 const setIdTruckselected =id =>({
     type:SET_ID_SELECTED_TRUCK,
     payload:id
 });



 export function UpdateListTrucks(listTrucks){
    return async(dispatch) =>{   
        dispatch(updateListTrucks(listTrucks));                  
    }
 }

 const updateListTrucks =listTrucks =>({
     type:UPDATE_LIST_TRUCKS_FILTER,
     payload:listTrucks
 });





