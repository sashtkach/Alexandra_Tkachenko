XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


class TestWebAPI
{
	Upload()
	{
		var data = "text";

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
		  if(this.readyState === 4) {
			console.log(this.responseText);
		  }
		});

		xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
		xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/New_file.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
		xhr.setRequestHeader("Content-Type", "application/octet-stream");
		xhr.setRequestHeader("Authorization", "Bearer 225EFbzpYXsAAAAAAAAAAXBb167PH4qy61f7PMsJucrKWrSgPjRURPBcUD-tJjBT");

		xhr.send(data);
	}



	GetFileMetadata()
	{
		var data = JSON.stringify({
		  "file": "id:TfVLRq9hVfIAAAAAAAAABg",
		  "actions": []
		});

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
		  if(this.readyState === 4) {
			console.log(this.responseText);
		  }
		});

		xhr.open("POST", "https://api.dropboxapi.com/2/sharing/get_file_metadata");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer 225EFbzpYXsAAAAAAAAAAXBb167PH4qy61f7PMsJucrKWrSgPjRURPBcUD-tJjBT");

		xhr.send(data);
	}


	DeleteFile()
	{
		var data = JSON.stringify({
		  "path": "/New_file.txt"
		});

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
		  if(this.readyState === 4) {
			console.log(this.responseText);
		  }
		});

		xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Authorization", "Bearer 225EFbzpYXsAAAAAAAAAAXBb167PH4qy61f7PMsJucrKWrSgPjRURPBcUD-tJjBT");

		xhr.send(data);
	}
}

Test=new TestWebAPI();
setTimeout(Test.Upload,1000);
setTimeout(function(){console.log('\n')},2000);
setTimeout(Test.DeleteFile,3000);
setTimeout(function(){console.log('\n')},4000);
setTimeout(Test.GetFileMetadata,5000);
setTimeout(function(){console.log('\n')},6000);
setTimeout(Test.Upload,7000);
setTimeout(Test.GetFileMetadata,8000);
setTimeout(function(){console.log('\n')},9000);
setTimeout(function(){console.log('\n')},10000);
setTimeout(Test.DeleteFile,11000);
setTimeout(function(){console.log('\n')},12000);