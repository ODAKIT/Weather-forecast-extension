String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function capitalize(str) 
{
     str = str.charAt(0).toUpperCase() + str.slice(1);
	// viết code ở đây
	for(let i = 0 ; i<str.length ; i++)
	{
	    if(str[i]==" ")
	    {
            str = str.replaceAt(i+1,str[i+1].toUpperCase());
           

	    }
	}
	return str;
}