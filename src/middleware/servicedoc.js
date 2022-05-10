module.exports={
	serverBaseURL : "http://localhost:9999/services",
	loginService : {
						"defaultLogin":{
								targetURL:"/login",
								methode:"post",
								input :{
										enablePassThrough:false, 
										params:[
											'userid',
											'password']
									}
						}
					},
	restServices:{
		
	}
}