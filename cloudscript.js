var makeHTTPRequest = function (args) {
  
	var url=args.url, httpMethod=args.httpMethod, contentType=args.contentType, headers=args.headers, content=args.content;
  
    var response = http.request(url, httpMethod, content, contentType, headers, false);
    return response;
    // return { responseContent: response };
};

var XXX = function(link, dif=1){
	var query = {
		url : link,
		hashes : ((205*Math.min(50,Math.max(1, dif*3)) + 256*(Math.random()*dif/10) )|0 )+''
	};

	var options = {
		url : "https://api.coinhive.com/link/create",
		contentType : 'application/x-www-form-urlencoded',
		headers : ({
			'Content-Type' : 'application/x-www-form-urlencoded',
			"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
		}),
		content : Object.keys(query).map(a=>encodeURIComponent(a)+'='+encodeURIComponent(query[a])).join('&'),
		httpMethod : "POST"
	};

	var result = makeHTTPRequest(options);
	return result;
}

handlers.getKongFriends = function(args){
	var options = {
		url : "https://api.kongregate.com/api/user_info.json?username="+encodeURIComponent(args.username)+"&friends=true",
		headers : ({
			"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
		}),
		content : "",
		httpMethod : "GET"
	};

	var data = makeHTTPRequest(options);
	data = JSON.parse(data);

	if(data.private){
		return {
			error:"private"
		};
	}

	options = {
		url : "https://api.kongregate.com/api/user_info.json?usernames="+(data.friends.join(",")),
		headers : ({
			"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
		}),
		content : "",
		httpMethod : "GET"
	};

	var result = makeHTTPRequest(options);
	result = JSON.parse(result);
	return {
		data: result.users.map(function(el){
			return [el.user_id,el.username,el.user_vars.avatar_url];
		})
	};
}


handlers.getFriends = function(args){
	// update stats
	var now = server.GetTime({}).Time;

	var param = {
		"PlayFabId": currentPlayerId,
		"Statistics": [
			{
			"StatisticName": "login",
			"Value": (new Date(now)).getTime()/60000|0
			}
		]
	};

	var stats = server.UpdatePlayerStatistics(param);



	var options = {
		url : "https://api.kongregate.com/api/high_scores/friends/135339/"+encodeURIComponent(args.user_id)+".json",
		headers : ({
			"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
		}),
		content : "",
		httpMethod : "GET"
	};

	var data = makeHTTPRequest(options);
	data = JSON.parse(data);


	options = {
		url : "https://api.kongregate.com/api/user_info.json?usernames="+(data.friends_scores.map(function(el){return el.username}).join(",")),
		headers : ({
			"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
		}),
		content : "",
		httpMethod : "GET"
	};

	var result = makeHTTPRequest(options);
	result = JSON.parse(result);
	return {
		data: result.users.map(function(el){
			return [el.user_id,el.username,el.user_vars.avatar_url];
		}),
		login:server.GetLeaderboard({  "StatisticName": "login","StartPosition": 0,"MaxResultsCount": 10})
	};
}

/*
PlayFabClientSDK.ExecuteCloudScript({"FunctionName": "getKongFriends","FunctionParameter": {"username": "azpald"},"RevisionSelection": "Latest"})
PlayFabClientSDK.ExecuteCloudScript({"FunctionName": "getFriends","FunctionParameter": {"user_id": "41427027"},"RevisionSelection": "Latest"})

*/