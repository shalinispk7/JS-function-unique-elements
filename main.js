// Add unique elements in the array
let arr=[25,35,45,55,25,65,35];
document.write("Elements in the given array: "+arr+"<br>");
function unique(arr){
	let result=[];       //unique elements are into this array
	for(i=0;i<arr.length;i++){
		 let count=0;
		 for (j=0;j<arr.length;j++){
			if(arr[i]==arr[j]){
				count++;
				if(count==2){
					break;
				}
			}

		  }
		  if(count==1){
			result.push(arr[i])
		  }
		 }
		 return result
}
document.write("Unique elements in the given array: "+unique(arr));