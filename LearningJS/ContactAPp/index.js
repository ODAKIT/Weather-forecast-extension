var readlineSync = require("readline-sync");
var fs = require("fs");

var contacts = [];

function FindContact()
{
    console.log("Do you want to find by ?");
    console.log("1.Name");
    console.log("2.PhoneNumber");
    var ip = readlineSync.question(">Your answer ");
    ip = parseInt(ip);
    switch(ip)
    {
        case 1:
            var name = readlineSync.question(">Name to search ");
            for(var contact of contacts)
            {
                if(contact.name==name)
                    return contact;
            }
            break;
        case 2:
            var phone = readlineSync.question(">Phone to search ");
            for(var contact of contacts)
            {
                if(contact.phonenumber==phone)
                    return contact;
            }
            break;
    }

}

function InputContact()
{
    var name = readlineSync.question(">Name :  ");
    var phonenumber = readlineSync.question(">Phone number :  ");
    var contact = {
        name:name,
        phonenumber:phonenumber,
    }

    contacts.push(contact);


}

function EditContact()
{
    var contact = FindContact();
    console.log("What infomation do you want to edit?");
    console.log("1.Name");
    console.log("2.PhoneNumber");
    var ip = readlineSync.question(">Your answer ");
    ip = parseInt(ip);
    switch(ip)
    {
        case 1:
            var name = readlineSync.question(">New name ");
            contact.name=name;
            
            break;
        case 2:
            var phone = readlineSync.question(">New phone ");
            contact.phone=phone;
            break;
    }

}

function DeleteContact()
{
    var contact = FindContact();
    var idx = contacts.indexOf(contact);
    contacts.splice(idx,1);
}

function SaveAndExit()
{
    var content = JSON.stringify(contacts);
    fs.writeFileSync("./data.json",content,{encoding:'utf8'});
}

function MENU()
{
    while(1)
    {
        console.log("1.Input contat");
        console.log("2.Edit contact");
        console.log("3.Delete contact");
        console.log("4.Save and exit");
        var ip = readlineSync.question("> ");
        ip=parseInt(ip);
        switch(ip)
        {
            case 1:
                InputContact();
                break;
            case 2:
                EditContact();
                break;
            case 3:
                DeleteContact();
                console.log(contacts);
                break;
            default:
                break;
        }

        if(ip==4)
        {
            SaveAndExit();
        }
    }
}
function main()
{
    MENU();
}

main();