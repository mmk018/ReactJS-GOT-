import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';

function ItemList ({getData,itemList,renderItem,onItemSelected}) {


    const [itemListInside, updateList]= useState(null);

    

    useEffect(()=>{
       

        getData()
            .then( (itemList) => {
                console.log(itemList);
                
                updateList(itemList)
            })
    },[])

    

    function renderItems (arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);

            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

   
        if (!itemListInside) {
            return <Spinner/>
        }

        const items = renderItems(itemListInside);

    return <>
        


        
            <ul className="item-list list-group">
                {items}
            </ul>
        
    
    </>

  
}

export default ItemList;