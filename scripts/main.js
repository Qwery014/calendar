let arr = [
  { id: 1, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-11" },
  { id: 2, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-12" },
  { id: 3, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-13" },
  { id: 4, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-14" },
  { id: 5, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-15" },
  { id: 6, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-16" },
  { id: 7, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-17" },
  { id: 8, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-18" },
  { id: 9, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-19" },
  { id: 10, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-20" },
  { id: 11, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-21" },
  { id: 12, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-22" },
  { id: 13, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-23" },
  { id: 14, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-24" },
  { id: 15, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-25" },
  { id: 16, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-26" },
  { id: 17, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-27" },
  { id: 18, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-28" },
  { id: 19, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-29" },
  { id: 20, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-30" },
  { id: 21, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-03-31" },
  { id: 22, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-04-01" },
  { id: 23, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-04-02" },
  { id: 24, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-04-03" },
  { id: 25, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-04-04" },
  { id: 26, sunrise: "4:40", fajr: "5:40", maghrib: "19:25", sunset: "19:30", date: "2024-04-05" },

  { id: 27, sunrise: "6:32", fajr: "4:44", maghrib: "19:41", sunset: "19:34", date: "2024-04-06" },
  { id: 28, sunrise: "6:31", fajr: "4:42", maghrib: "19:42", sunset: "19:36", date: "2024-04-07" },
  { id: 29, sunrise: "6:29", fajr: "4:40", maghrib: "19:43", sunset: "19:37", date: "2024-04-08" },
  { id: 30, sunrise: "6:27", fajr: "4:38", maghrib: "19:44", sunset: "19:38", date: "2024-04-09" },
  { id: 31, sunrise: "6:26", fajr: "4:36", maghrib: "19:45", sunset: "19:39", date: "2024-04-10" }
];

let today = Today();
let isRamadan = false;

arr.forEach(e => {
  if (e.date === today) {
    document.querySelector(".section-1 .time").innerHTML = e.sunrise;
    document.querySelector(".section-2 .time").innerHTML = e.fajr;
    document.querySelector(".section-3 .time").innerHTML = e.sunset;
    document.querySelector(".section-4 .time").innerHTML = e.maghrib;
    
    isRamadan = true;
    return;
  }
})


if(!isRamadan) {
  let block = document.querySelector(".main");
  block.style.display = "block";
  block.innerHTML = "<div class='not'>See u in Ramadan</div>";
} 


function Today() {
  let currentDate = new Date();

  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, '0');
  let day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`
}