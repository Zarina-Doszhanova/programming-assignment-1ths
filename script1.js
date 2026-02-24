function calculate() {
  const name = document.getElementById("name").value || "Driver";
  const distance = Number(document.getElementById("distance").value);
  const consumption = Number(document.getElementById("consumption").value);
  const price = Number(document.getElementById("price").value);
  const result = document.getElementById("result");
  if (distance <= 0 || consumption <= 0 || price <= 0) {
    result.style.background = "#fff3cd";
    result.innerHTML = "Please enter positive numbers!";
    return;
  }
  const fuel = Math.round((distance * consumption) / 100); 
  const cost = Math.round(fuel * price);                   

  let status, color;
  if (cost <= 5000) {
    status = "Efficient =)";
    color = "#e6f7e6";
  } else {
    status = "Costly =(";
    color = "#fdeaea";
  }

  result.style.background = color;
  result.innerHTML = `
    <p>Hello, <strong>${name}</strong> 👋</p>
    <p>Fuel needed: <strong>${fuel} l</strong></p>
    <p>Total cost: <strong>${cost} tg</strong></p>
    <p>Status: <strong>${status}</strong></p>
  `;
}
