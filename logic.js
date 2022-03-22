
const friends = ["JACK","NICK","TOM","GANESH","CLAIRA"];
 

document.getElementById("flist").innerHTML = `Friends Name:  '${friends}'`;

// adding friends to the list

let addFriends=()=>{

    let val = document.getElementById("input").value.toUpperCase();


    if(val != ''){

        friends.push(val);
        document.getElementById("flist").innerHTML = `Friends Name:  '${friends}'`;
        let noti= document.getElementById("notify").innerHTML= `${val} added successfully`;
        document.getElementById("notify").style.display="inline-block";
        document.getElementById("notify").style.backgroundColor="green"
    
    }
};

// deleting friends name from list

let del = () =>{

   const delWord= document.getElementById("input").value.toUpperCase();

   if(delWord != ''){
   let delWordIndex= friends.indexOf(delWord);
   if(delWordIndex != -1){

   friends.splice(delWordIndex,1);
   let noti= document.getElementById("notify").innerHTML= `${delWord} has been deleted `;
    document.getElementById("notify").style.display="inline-block";
    document.getElementById("notify").style.backgroundColor="crimson"
    document.getElementById("notify").style.color="#fff"
   document.getElementById("flist").innerHTML = `Friends Name:  '${friends}'`;

      }
   }

};

// updating names

let updated = () =>{

    // debugger;
    let elem = document.getElementById("input2").value.toUpperCase();
    let targetIndex = friends.indexOf(elem);
    // console.log(targetIndex);
    let update = document.getElementById("input3").value.toUpperCase();
if(targetIndex != '' && update != ''){

    if(targetIndex != -1){
    friends.splice(targetIndex,1,update);
    let noti= document.getElementById("notify").innerHTML= `Updated successfully ${elem} to ${update}`;
    document.getElementById("notify").style.display="inline-block";
    document.getElementById("notify").style.backgroundColor="yellow";
    document.getElementById("notify").style.color="darkBlue"

}


    document.getElementById("flist").innerHTML = `Friends Name:  '${friends}'`;

}


};