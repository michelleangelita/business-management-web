function searchFunction() {
  var search = document.getElementById("searchId");
  var result = search.value.toUpperCase();
  var table = document.getElementById("tableProduk");
  var tr = table.getElementsByTagName("tr");
  var td, i, input;

  for (i = 0; i < tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) 
    {
      input = td.textContent || td.innerText;
      if (input.toUpperCase().indexOf(result) > -1) 
      {
        tr[i].style.display = "";
      } 
      else 
      {
        tr[i].style.display = "none";
      }
    }       
  }
}

function sortAlphabet(n) {
    var table =  document.getElementById("tableProduk");
    var row = table.rows;
    var swap = true;
    var x, y, shouldSwap;
    var condition = 1;
    var swapCount = 0; 
    
    //condition 1 : ascending
    //condition 2 : descending

    
    while (swap) 
    {
      swap = false;

      for (i = 1; i < (row.length - 1); i++) 
      {
        shouldSwap = false;

        x = row[i].getElementsByTagName("td")[n];
        y = row[i + 1].getElementsByTagName("td")[n];
      
        
        if (condition == 1) 
        {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
            {
              shouldSwap = true;
              break;
            }
        }
        else if(condition == 2)
        {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
            {
                shouldSwap = true;
                break;
            }
        }
      }

      if (shouldSwap) 
      {
        row[i].parentNode.insertBefore(row[i + 1], row[i]);
        swap = true;
        swapCount++;
      }
      else 
      {
        if (swapCount == 0 && condition == 1) 
        {
            condition = 2;
            swap = true;
        }
      }
    }
  }

function sortNumber(n) {
    var table =  document.getElementById("tableProduk");
    var row = table.rows;
    var swap = true;
    var x, y, shouldSwap;
    var condition = 1;
    var swapCount = 0; 
    
    //condition 1 : ascending
    //condition 2 : descending

    
    while (swap) 
    {
      swap = false;

      for (i = 1; i < (row.length - 1); i++) 
      {
        shouldSwap = false;

        x = row[i].getElementsByTagName("td")[n];
        y = row[i + 1].getElementsByTagName("td")[n];
      
        
        if (condition == 1) 
        {
            if (Number(x.innerHTML) > Number(y.innerHTML)) 
            {
              shouldSwap = true;
              break;
            } 
        }
        else if(condition == 2)
        {
            if (Number(x.innerHTML) < Number(y.innerHTML)) 
            {
              shouldSwap = true;
              break;
            } 
        }
      }

      if (shouldSwap) 
      {
        row[i].parentNode.insertBefore(row[i + 1], row[i]);
        swap = true;
        swapCount++;
      }
      else 
      {
        if (swapCount == 0 && condition == 1) 
        {
            condition = 2;
            swap = true;
        }
      }
    }
  }