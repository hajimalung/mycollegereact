import servicedoc from './servicedoc.js';
import axios from 'axios';


class MiddlewareSDK{
	constructor(){
		this.serviceProvider = new serviceProvider();
		this.serverURL = this.serviceProvider.getBaseURL();
		this.axios = axios;
	}
	doLogin(provideName,params,succesHandler,failureHandler){
		try{
		var serviceConfig = this.serviceProvider.getLoginServiceconfig(provideName);
		//console.log("service dtails :"+JSON.stringify(serviceConfig));

		var urlToHit = this.buildFinalURL(serviceConfig.targetURL);
		//console.log("url : "+urlToHit);

		var paramsToSend = this.validateAndBuildParamsForService(serviceConfig.input,params);
		//console.log("params :"+paramsToSend);
		this.doPost(urlToHit,paramsToSend,succesHandler,failureHandler);

		}catch(exc){
			console.log(exc);
		}
	}
	buildFinalURL(url1){
		return this.serverURL+url1;
	}
	validateAndBuildParamsForService(serviceRequieredInput,clientParams){
		if(serviceRequieredInput.enablePassThrough){
			return clientParams;
		}
		var tempPrams = {};
		for(var i=0;i<serviceRequieredInput.params.length;i++){
			var requieredParam = serviceRequieredInput.params[i];
			if(clientParams[requieredParam]!== null || clientParams[requieredParam] !== undefined){
				tempPrams[requieredParam] = clientParams[requieredParam];
			}else{
				throw new {
							errorMessage:"missing param :"+requieredParam
							}();
			}
		}
		return tempPrams;
	}
	doPost(url,params,successCallback,failurecallBack){
		axios.post(url,params).then(
									function(response){
										//console.log("success!");
										successCallback(response);
									}).catch(
										function(error){
											//console.log("failure! "+error.response);
											failurecallBack(error.response);
										})
	}
}
class serviceProvider{
	constructor(){
		this.loginServices = servicedoc.loginService;
	}
	getLoginServiceconfig(nameOfLoginService){

		var loginConfig = this.loginServices[nameOfLoginService];
		if(loginConfig!==null || loginConfig!==undefined)
		{
			return loginConfig;
		}
		throw new {
					errorMessage : "login service with name "+nameOfLoginService+" not found!!"
					}();
	}
	getBaseURL(){
		return servicedoc.serverBaseURL;
	}
}
export default MiddlewareSDK;