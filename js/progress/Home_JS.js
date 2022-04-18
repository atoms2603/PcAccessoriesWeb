

function loop_products(){
    var i=0;
    for(i =0 ; i< 10 ; i++){
      var proDiv = document.createElement('div');
      proDiv.className='col-sm-6 col-md-4 col-lg-3';
      
      document.getElementById('row_products').appendChild(proDiv); //DIV TỔNG
      var proDiv2 = document.createElement('div');
      proDiv2.className='box';
     
      
      proDiv.appendChild(proDiv2) //
      var linka = document.createElement('a');
      linka.href='#';
      proDiv2.appendChild(linka)
      
      
      var divIMG = document.createElement('div');
      divIMG.className='img-box';
      linka.appendChild(divIMG)
      var proIMG = document.createElement('img');
      proIMG.src='images/p'+i+'.png';
      divIMG.appendChild(proIMG);
      
      var divDetail = document.createElement('div');
      divDetail.className='detail-box';
      linka.appendChild(divDetail);
      //Các thẻ trong divDetails
      var tagH6 = document.createElement('h6');
      tagH6.innerText='Watch';
      divDetail.appendChild(tagH6);
      var tagH6_2 = document.createElement('h6');
      tagH6_2.innerText='Price';
      divDetail.appendChild(tagH6_2);
      var spanDetail = document.createElement('span');
      spanDetail.innerText='Tien'+ 1+'$';
      tagH6_2.appendChild(spanDetail);

      //PHẦN NEW
      var divNew = document.createElement('div');
      divNew.className='new';
      linka.appendChild(divNew);
      var spanNew = document.createElement('span');
      spanNew.innerText='New';
      divNew.appendChild(spanNew);
    }
  }