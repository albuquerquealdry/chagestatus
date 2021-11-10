import { Injectable } from "@nestjs/common";
const axios = require('axios');
@Injectable()
export class CheckRepository {
    constructor(){

    }
    
checkStatus(id){
    axios.patch(`https://sheetdb.io/api/v1/to8vhwddex27w/idEntrega/${id}`, 
	{ 
		data:{"status":"Produto Entregue"}
	}, 
	{
		// Config
	}
);
}
};